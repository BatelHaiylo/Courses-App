import React, { useState, useEffect, createContext } from "react";
import { auth, onAuthStateChanged } from '../firebase';
import app from "../firebase";


export const UserDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    app.auth().onAuthStateChanged((auth, user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <UserDataContext.Provider value={currentUser}>
        {children}
    </UserDataContext.Provider>
  );
};
