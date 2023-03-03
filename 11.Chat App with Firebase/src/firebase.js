import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCND4xCrUOTHJ5ihR5zl9KKR8KTa6b7TGY",
    authDomain: "mychat-51b54.firebaseapp.com",
    projectId: "mychat-51b54",
    storageBucket: "mychat-51b54.appspot.com",
    messagingSenderId: "576108680399",
    appId: "1:576108680399:web:bfb949b9f88dfb3ab0d3ba"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }