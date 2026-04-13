// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDymlH9-7H6IOj6CcDYDwQXlKQnR-OyRcQ",
  authDomain: "my-react-app-70be8.firebaseapp.com",
  projectId: "my-react-app-70be8",
  storageBucket: "my-react-app-70be8.firebasestorage.app",
  messagingSenderId: "357737924048",
  appId: "1:357737924048:web:fbc1f80bbfee29c4e925d5",
  measurementId: "G-37HHES0GPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

