// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj73kzhcvnBLchOMFF2t6o7PeyKi-jcMU",
  authDomain: "prepwise-e5b22.firebaseapp.com",
  projectId: "prepwise-e5b22",
  storageBucket: "prepwise-e5b22.firebasestorage.app",
  messagingSenderId: "153158641142",
  appId: "1:153158641142:web:aedbb95c796745302693d7",
  measurementId: "G-9YFBNEZF5G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);