import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8l4lY3RxefmZa6uUnb_DCX2v3pkrpof0",
    authDomain: "e-commerce-site-19946.firebaseapp.com",
    databaseURL: "https://e-commerce-site-19946.firebaseio.com",
    projectId: "e-commerce-site-19946",
    storageBucket: "e-commerce-site-19946.appspot.com",
    messagingSenderId: "163356972508",
    appId: "1:163356972508:web:f336400bb5aa6f717cab19"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
