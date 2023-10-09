// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJjgY9jcMTtMkXq-YPPceHUUaaBXHX5M",
  authDomain: "event-management-d468a.firebaseapp.com",
  projectId: "event-management-d468a",
  storageBucket: "event-management-d468a.appspot.com",
  messagingSenderId: "1049383556897",
  appId: "1:1049383556897:web:e4ba4ebf76bfb717f51060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;