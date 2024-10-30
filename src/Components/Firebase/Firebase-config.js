// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Use the correct import path

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa8_9iQ235Eg0nZaE8qEs84NWkh8CkpsY",
  authDomain: "umusic-c7d05.firebaseapp.com",
  databaseURL:
    "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "umusic-c7d05",
  storageBucket: "umusic-c7d05.appspot.com",
  messagingSenderId: "755436189937",
  appId: "1:755436189937:web:51eb5c63b17f5b6e4c5150",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other files
export { auth };
