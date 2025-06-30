// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmPNgLpP-sJ5lSO3Z7m8jIECcK0azb4MY",
  authDomain: "baralian-publisher-da78b.firebaseapp.com",
  projectId: "baralian-publisher-da78b",
  storageBucket: "baralian-publisher-da78b.firebasestorage.app",
  messagingSenderId: "967269779144",
  appId: "1:967269779144:web:5c336eb0bd433765c507fd",
  measurementId: "G-PCQB7LGDB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
