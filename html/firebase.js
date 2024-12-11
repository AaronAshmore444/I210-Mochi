// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrzcMDMVwQCMsFWZ5E5NRLOfFH37DHJbQ",
  authDomain: "i210-test-aaron.firebaseapp.com",
  projectId: "i210-test-aaron",
  storageBucket: "i210-test-aaron.firebasestorage.app",
  messagingSenderId: "191144398486",
  appId: "1:191144398486:web:20e66e027b8aa17b98bcb7",
  measurementId: "G-2R7ZNNGLXL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);