import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBDaQEUsAkrSdlJcAW_n-ZJC0bO3YEIyLo",
authDomain: "disney-plus-dd5c5.firebaseapp.com",
projectId: "disney-plus-dd5c5",
storageBucket: "disney-plus-dd5c5.appspot.com",
messagingSenderId: "1043678674334",
appId: "1:1043678674334:web:a1c151a4e5ec4e34b96a8f",
measurementId: "G-DQKL8GH1DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider =  new GoogleAuthProvider();

export {auth,provider};