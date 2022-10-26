// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4rynqkRXqvhg_u0pyxUdAmVDscCTJxl8",
  authDomain: "chat-realtime-f0869.firebaseapp.com",
  projectId: "chat-realtime-f0869",
  storageBucket: "chat-realtime-f0869.appspot.com",
  messagingSenderId: "429767530819",
  appId: "1:429767530819:web:3e2c62fac7030bf700b7f6",
  measurementId: "G-SEH25M2MCV"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider};