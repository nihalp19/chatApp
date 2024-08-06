import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFsoR6KyC1rZTMM9k0YN72YG41ncW2e58",
  authDomain: "chatappnihal-197a7.firebaseapp.com",
  projectId: "chatappnihal-197a7",
  storageBucket: "chatappnihal-197a7.appspot.com",
  messagingSenderId: "1083673937888",
  appId: "1:1083673937888:web:ebb7554516e984e8474d85",
  measurementId: "G-79TG38ECNK"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider(app);
