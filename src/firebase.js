// import firebase from "firebase/app";
// import "firebase/auth";
// import "firbase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from "./config.json"


firebase.initializeApp(config);//connected react app to firrbase

let provider = new firebase.auth.GoogleAuthProvider(); // flag using google

export const auth = firebase.auth(); // made auth to use firebase functions

export const singInWithGoogle = ()=> {
  auth.signInWithPopup(provider);
}



export default firebase;