// clone-73b8c amazon-clone
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAgrqC4c7bLkmBwhGMnHhbuQIpXkqNMdRA",
    authDomain: "clone-73b8c.firebaseapp.com",
    databaseURL: "https://clone-73b8c.firebaseio.com",
    projectId: "clone-73b8c",
    storageBucket: "clone-73b8c.appspot.com",
    messagingSenderId: "862410697573",
    appId: "1:862410697573:web:f46fa052fbca993a710f8c",
    measurementId: "G-Q9ZMGKHL4L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};