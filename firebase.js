// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa2FaYvqnqO9FuBRKz4uzSIBYCTHHFb2A",
  authDomain: "first-project-4f01e.firebaseapp.com",
  projectId: "first-project-4f01e",
  storageBucket: "first-project-4f01e.firebasestorage.app",
  messagingSenderId: "780411003591",
  appId: "1:780411003591:web:ad0e933bb81972e55914e2",
  measurementId: "G-NFTZ7S7ZYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
