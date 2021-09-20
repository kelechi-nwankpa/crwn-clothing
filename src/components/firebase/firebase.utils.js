import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDZ-zAvmrj3Apud-usDC5pmjSK5CpdTZzc",
    authDomain: "crwn-db-49e38.firebaseapp.com",
    projectId: "crwn-db-49e38",
    storageBucket: "crwn-db-49e38.appspot.com",
    messagingSenderId: "422157039329",
    appId: "1:422157039329:web:4daa04d29916bbbdd8e9a0",
    measurementId: "G-HDZ0PBNRHF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
