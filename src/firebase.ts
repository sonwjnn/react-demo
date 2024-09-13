// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_OM5lClTXg6fkwyyX4BaVPeeL9w6hgvE",
  authDomain: "fir-demo-455f8.firebaseapp.com",
  projectId: "fir-demo-455f8",
  storageBucket: "fir-demo-455f8.appspot.com",
  messagingSenderId: "911382318316",
  appId: "1:911382318316:web:ac5df8b88d026cc59a29c9",
  measurementId: "G-6HMY45EZSW",
  databaseURL:
    "https://fir-demo-455f8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
