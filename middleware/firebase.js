import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXCU7tyBp8gA-K_au9Y0gi9VPiEHyWg14",
    authDomain: "login-html-e918c.firebaseapp.com",
    projectId: "login-html-e918c",
    storageBucket: "login-html-e918c.appspot.com",
    messagingSenderId: "459886650078",
    appId: "1:459886650078:web:e4a1f7fb37a954f02f984f",
    measurementId: "G-1YHDJHFG15"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const signinbygoogle= new GoogleAuthProvider()