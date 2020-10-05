import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBePIyHo-lz5ORfJTEAuRwIgGyFnQsUieQ",
    authDomain: "clone-1b7d0.firebaseapp.com",
    databaseURL: "https://clone-1b7d0.firebaseio.com",
    projectId: "clone-1b7d0",
    storageBucket: "clone-1b7d0.appspot.com",
    messagingSenderId: "776717438970",
    appId: "1:776717438970:web:7279bce4d0f1c07c039e43",
    measurementId: "G-GC7Z7LX5Y3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth}; 