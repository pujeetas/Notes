// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tasknest-69e10.firebaseapp.com",
  projectId: "tasknest-69e10",
  storageBucket: "tasknest-69e10.firebasestorage.app",
  messagingSenderId: "444758836679",
  appId: "1:444758836679:web:ca475a0165d0e20bde85e2",
  measurementId: "G-7L2K9T7380",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
