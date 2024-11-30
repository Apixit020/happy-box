// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsfF5__vGMl4RYMCkRjtrOiBrYQuuBC70",
  authDomain: "happy-box-f490c.firebaseapp.com",
  databaseURL: "https://happy-box-f490c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "happy-box-f490c",
  storageBucket: "happy-box-f490c.firebasestorage.app",
  messagingSenderId: "198336374129",
  appId: "1:198336374129:web:fec77c9a1f2138cb3042d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
