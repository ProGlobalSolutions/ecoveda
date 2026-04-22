import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your config (keep yours)
const firebaseConfig = {
  apiKey: "AIzaSyDue38wzIQOMwCsnTKQKzFFs1lIEJ74KgY",
  authDomain: "ecoveda-ebcf3.firebaseapp.com",
  projectId: "ecoveda-ebcf3",
  storageBucket: "ecoveda-ebcf3.firebasestorage.app",
  messagingSenderId: "147387347416",
  appId: "1:147387347416:web:cb0a6d44962943023b42ad"
};

// Initialize app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
export const db = getFirestore(app);