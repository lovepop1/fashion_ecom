import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// 1) Rename this file to "firebase.js".

// 2) Fill firebaseConfig with the settings of your Firebase project.

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase;
