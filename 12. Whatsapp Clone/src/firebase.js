import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJcyK53G9AIuWhcnv7mEBKJ-TYdXie4sQ",
  authDomain: "whatsapp-clone-902e8.firebaseapp.com",
  projectId: "whatsapp-clone-902e8",
  storageBucket: "whatsapp-clone-902e8.appspot.com",
  messagingSenderId: "814374755873",
  appId: "1:814374755873:web:992e49f695481011238d60",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
