// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrRzKXb7-gjcItFQbhU8jmNX8IFvbJMy0",
  authDomain: "netflixgpt-892fe.firebaseapp.com",
  projectId: "netflixgpt-892fe",
  storageBucket: "netflixgpt-892fe.appspot.com",
  messagingSenderId: "988813847456",
  appId: "1:988813847456:web:77b0ad699a7c55089892c5",
  measurementId: "G-59WTB5K35S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;