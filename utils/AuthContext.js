import React, { createContext, useState, useEffect, useContext } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

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
    return () => subscriber; // unsubscribe on unmount
  }, []);

  const signInWithPhoneNumber = async (phoneNumber) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      return confirmation;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const confirmCode = async (confirm, verificationCode) => {
    try {
      await confirm.confirm(verificationCode);
    } catch (error) {
      console.error("Invalid code.", error);
    }
  };

  const signInWithGoogle = async () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        "410955658021-gnspqi8tjb2c0m2p448vjl0m03ei4t0g.apps.googleusercontent.com",
      offlineAcess: true,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken
      );
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithPhoneNumber,
        confirmCode,
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
