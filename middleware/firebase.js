// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWnmtT0WOO6JN6ZZI4FCDIS7HVahqElB4",
  authDomain: "merchdjv.firebaseapp.com",
  projectId: "merchdjv",
  storageBucket: "merchdjv.appspot.com",
  messagingSenderId: "645804689748",
  appId: "1:645804689748:web:6bc9ac08df987d67cea0c1",
  measurementId: "G-EXMG4FF86Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();