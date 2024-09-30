// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getfireStore, doc, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhlIPpzPXrpnf_3XhSlzDMaO7hQ91FV5M",
  authDomain: "my-personal-finance-tracker.firebaseapp.com",
  projectId: "my-personal-finance-tracker",
  storageBucket: "my-personal-finance-tracker.appspot.com",
  messagingSenderId: "444709266804",
  appId: "1:444709266804:web:f1b323aa51c2f6486e3821",
  measurementId: "G-3NCZJT1NQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getfireStore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc}