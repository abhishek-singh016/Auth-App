// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f8ba3.firebaseapp.com",
  projectId: "mern-auth-f8ba3",
  storageBucket: "mern-auth-f8ba3.firebasestorage.app",
  messagingSenderId: "260102975277",
  appId: "1:260102975277:web:85d70a0f2c81c8baa96da4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);