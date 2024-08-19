import React, { createContext, useState, useEffect, useContext } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import axios from 'axios';

GoogleSignin.configure({
  webClientId: "410955658021-gnspqi8tjb2c0m2p448vjl0m03ei4t0g.apps.googleusercontent.com",
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // Unsubscribe on unmount
  }, [initializing]);

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error("Phone Sign-In Error:", error.message);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.error("Invalid code:", error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = userInfo;

      if (!idToken) {
        throw new Error("Google Sign-In failed: No ID token received.");
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      const firebaseToken = await userCredential.user.getIdToken();
      const firebaseUID = userCredential.user.uid;

      if (userCredential.additionalUserInfo.isNewUser) {
        console.log("New user created in Firebase Auth.");

        try {
          const response = await axios.post('http://192.168.0.1:8000/auth/create_user/', {
            uid: firebaseUID,
            username: userCredential.user.displayName,
            email: userCredential.user.email,
          }, {
            headers: {
              Authorization: `Bearer ${firebaseToken}`,
            },
          });

          console.log("Server response:", response.data);
        } catch (serverError) {
          console.error("Error sending data to server:", serverError.message);
        }
      } else {
        console.log("User already exists in Firebase Auth.");
      }
    } catch (error) {
      handleSignInError(error);
    }
  };

  const handleSignInError = (error) => {
    if (error.code === 'auth/network-request-failed') {
      console.error("Network error occurred during sign-in:", error.message);
    } else if (error.code === 'auth/popup-closed-by-user') {
      console.error("Sign-in popup was closed by the user:", error.message);
    } else if (error.code === 'auth/cancelled-popup-request') {
      console.error("Sign-in popup was cancelled:", error.message);
    } else {
      console.error("Google sign-in error:", error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = userInfo;

      if (!idToken) {
        throw new Error("Google Sign-In failed: No ID token received.");
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      if (!userCredential.user) {
        throw new Error("User does not exist.");
      }

      console.log("User signed in successfully.");
    } catch (error) {
      handleSignInError(error);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.signOut(); // Also sign out of Google
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpWithGoogle,
        signInWithGoogle,
        signInWithPhoneNumber,
        confirmCode,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

