import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWPZkzYSl5GIlN1_5z4CZarkbGoZIhrFs",
  authDomain: "mediapp---prototype.firebaseapp.com",
  projectId: "mediapp---prototype",
  storageBucket: "mediapp---prototype.firebasestorage.app",
  messagingSenderId: "472563890176",
  appId: "1:472563890176:web:c0eaaa9b68bc0b8ebec0e5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
