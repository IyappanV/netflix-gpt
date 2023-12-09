// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIYvVdpVm4DomHLiLItU4nvQe5PZhm-_0",
  authDomain: "netflixgpt-ae09f.firebaseapp.com",
  projectId: "netflixgpt-ae09f",
  storageBucket: "netflixgpt-ae09f.appspot.com",
  messagingSenderId: "1076255564708",
  appId: "1:1076255564708:web:73237792d57611ea409731",
  measurementId: "G-P70KKPDYXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();