// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUqME1AqesJfQjbxkQGQpqORBg7yDTI6c",
  authDomain: "filmrepo-2b669.firebaseapp.com",
  projectId: "filmrepo-2b669",
  storageBucket: "filmrepo-2b669.appspot.com",
  messagingSenderId: "108274848987",
  appId: "1:108274848987:web:942ebdf194efe5e2e968fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
