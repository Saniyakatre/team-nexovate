// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8gwMJFUACD1LWsuAjoGfRCOYhuEeOuY",
  authDomain: "login-auth-8b6fa.firebaseapp.com",
  projectId: "login-auth-8b6fa",
  storageBucket: "login-auth-8b6fa.appspot.com",  // ✅ FIXED THIS
  messagingSenderId: "576701377656",
  appId: "1:576701377656:web:d981c40d6ebfd3ce73d18d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app); // ✅ FIXED THIS
export default app;
