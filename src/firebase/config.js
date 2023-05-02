// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbXYJzjmSWjoBVb6IiebhaE_gyKEMDhYc",
  authDomain: "recipes-36eae.firebaseapp.com",
  projectId: "recipes-36eae",
  storageBucket: "recipes-36eae.appspot.com",
  messagingSenderId: "118496703625",
  appId: "1:118496703625:web:9465fd1b1e1ae0a9664258",
  measurementId: "G-VV8KDFVRZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
