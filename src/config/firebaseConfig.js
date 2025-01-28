// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCln_oo5b1cOtwxohYXKAgJW_OXgbr0lro",
  authDomain: "expensetracker-66fa1.firebaseapp.com",
  projectId: "expensetracker-66fa1",
  storageBucket: "expensetracker-66fa1.appspot.com",
  messagingSenderId: "525876987516",
  appId: "1:525876987516:web:8899820177df9f8b20ebf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
