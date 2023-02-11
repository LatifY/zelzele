import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process?.env?.REACT_APP_API_KEY,
  authDomain: "zelzele-a5426.firebaseapp.com",
  databaseURL: "https://zelzele-a5426-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zelzele-a5426",
  storageBucket: "zelzele-a5426.appspot.com",
  messagingSenderId: "670728612513",
  appId: process?.env?.REACT_APP_ID,
  measurementId: "G-4HMYYR2ZFJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)