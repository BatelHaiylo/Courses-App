import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase';


const UserContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, googleSignIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};





  // const createUserDocument = async (user, additionalData) => {
  //   if (!user) return;
  //   const userRef = firestore.doc(`users/${user.uid}`);
  //   const snapshot = await userRef.get();
  //   if (!snapshot.exists) {
  //     const { email, password } = user;
  //     const { firstName, lastName } = additionalData;
  //     try {
  //       await userRef.set({
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         createdAt: new Date(),
  //       });
  //     } catch (error) {
  //       console.log('Error in creating user', error);
  //     }
  //   }
  // };
