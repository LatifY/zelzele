import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPi_pND7R7s_q36olkBNP802Qlx39y7a4",
  authDomain: "zelzele-a5426.firebaseapp.com",
  databaseURL: "https://zelzele-a5426-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zelzele-a5426",
  storageBucket: "zelzele-a5426.appspot.com",
  messagingSenderId: "670728612513",
  appId: "1:670728612513:web:654a0ef332a2d6c4279ee0",
  measurementId: "G-4HMYYR2ZFJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)