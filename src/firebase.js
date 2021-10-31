import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqvB3a-9rpvrbA1rUWERAC0y2NhD-53vA",
    authDomain: "challange-5f99e.firebaseapp.com",
    projectId: "challange-5f99e",
    storageBucket: "challange-5f99e.appspot.com",
    messagingSenderId: "124606272614",
    appId: "1:124606272614:web:2dcb2718dda2ada4e449a7",
    measurementId: "G-WNKYJ2159E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export {db, auth}