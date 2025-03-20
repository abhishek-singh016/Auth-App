// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-43018.firebaseapp.com",
  projectId: "auth-app-43018",
  storageBucket: "auth-app-43018.firebasestorage.app",
  messagingSenderId: "484287351090",
  appId: "1:484287351090:web:e4b4576494445d3a8b6f2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);