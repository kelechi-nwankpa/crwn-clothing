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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch (err) {
          console.log('error creating user', err.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
