import { useState, useEffect } from "react";
import firebase from 'firebase';
import {app} from '../../../firebase';

export default function GoogleData() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const authWithGoogle = () => {
      firebase.auth().signInWithPopup(provider);
    };
  
    return (
      <>
        <button onClick={authWithGoogle}>Login</button>
      </>
    );
  };
  