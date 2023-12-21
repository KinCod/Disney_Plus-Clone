import firebase from "firebase";

//this gives us access to the DB
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

//Initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore is the db we'll be using
const db = firebaseApp.firestore();

//firebase authentication for logging in and out
const auth = firebase.auth();

//authentication will be provided by google
const provider = new firebase.auth.GoogleAuthProvider();

//storage is given by firebase
const storage = firebase.storage();

export { auth, provider, storage };
export default db ;
