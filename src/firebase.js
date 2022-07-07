// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBFelH3y4BM_u_Z-HQxKc5GCrgD2gMA9a8",
  authDomain: "tic-tac-toe-20ce2.firebaseapp.com",
  projectId: "tic-tac-toe-20ce2",
  storageBucket: "tic-tac-toe-20ce2.appspot.com",
  messagingSenderId: "619980661806",
  appId: "1:619980661806:web:27a14599e0a557d7e72bbf"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
