import React, { createContext, useState, useEffect, useContext } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "410955658021-gnspqi8tjb2c0m2p448vjl0m03ei4t0g.apps.googleusercontent.com",
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber(); // Unsubscribe on unmount
  }, [initializing]);

  const signInWithGoogle = () => {
      GoogleSignin.hasPlayServices()
        .then(() => {
          return GoogleSignin.signIn();
        })
        .then(userInfo => {
          const { idToken } = userInfo;
          if (!idToken) {
            throw new Error("Google Sign-In failed: No ID token received.");
          }
          console.log("Google User Info:", idToken);

          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          return auth().signInWithCredential(googleCredential);
        })

      .catch (error =>{
        if (error.code === 'auth/network-request-failed') {
          console.error("Network error occured during sigin", error.message)
        }
        else {
          console.error("Google sign-in error:", error.message);
        }
      });
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
        signInWithGoogle,
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
