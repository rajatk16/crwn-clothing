import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAEyAxHxgB6SixqdiXhQIcN6pAXFCvOD4M",
  authDomain: "crwn-db-69da9.firebaseapp.com",
  databaseURL: "https://crwn-db-69da9.firebaseio.com",
  projectId: "crwn-db-69da9",
  storageBucket: "crwn-db-69da9.appspot.com",
  messagingSenderId: "268869342848",
  appId: "1:268869342848:web:4ce2923138098461"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
}

export default firebase;