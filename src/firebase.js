// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL3j8tvvUcAkVivctoCL1GtHwtWdgF7KQ",
  authDomain: "ntut-web-firstproject.firebaseapp.com",
  projectId: "ntut-web-firstproject",
  storageBucket: "ntut-web-firstproject.appspot.com",
  messagingSenderId: "754092143207",
  appId: "1:754092143207:web:a6dcb1c62f8cf7ae6e1ac2",
  measurementId: "G-9NZ4GLD9CD"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

