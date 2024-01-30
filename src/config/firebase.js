// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvONN2gxMso8pUR46C3oW3zx5NxQTUpyQ",
  authDomain: "filmrepo-ffdd9.firebaseapp.com",
  projectId: "filmrepo-ffdd9",
  storageBucket: "filmrepo-ffdd9.appspot.com",
  messagingSenderId: "899496596559",
  appId: "1:899496596559:web:f7f360c3bc06473c41463a",
  measurementId: "G-4YRKW16MW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
