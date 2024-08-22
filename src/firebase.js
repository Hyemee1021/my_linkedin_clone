// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn451TCxwaHvmZXj4bhRZK89u9D8j0yjk",
  authDomain: "my-linkedin-clone-fcbbd.firebaseapp.com",
  projectId: "my-linkedin-clone-fcbbd",
  storageBucket: "my-linkedin-clone-fcbbd.appspot.com",
  messagingSenderId: "1014917026729",
  appId: "1:1014917026729:web:ac9882370dfdaa38b4eab8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

// Set persistence for the authentication session
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});

export { db, auth };
