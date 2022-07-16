// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v4-7d96e.firebaseapp.com",
  projectId: "twitter-v4-7d96e",
  storageBucket: "twitter-v4-7d96e.appspot.com",
  messagingSenderId: "405392425398",
  appId: "1:405392425398:web:ae64ea371145b1f5fdc117"
};
 
// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};
