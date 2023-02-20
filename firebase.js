// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//     getFirestore, collection
// } from 'firebase/firestore'


import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjyWLiirKXrNJxnxV7dilgsnD-UU7fbHA",
    authDomain: "medaillon-demo.firebaseapp.com",
    projectId: "medaillon-demo",
    storageBucket: "medaillon-demo.appspot.com",
    messagingSenderId: "80077609583",
    appId: "1:80077609583:web:8659440635bae374f44b9a",
    measurementId: "G-WL44LJKT65"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore()

// const colRef = collection(db, 'users')



firebase.initializeApp(firebaseConfig);
// // !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }