// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADxzlFQ3TW74-Ib_pNah1rddTj9-44h6k",
  authDomain: "user-auth-password.firebaseapp.com",
  projectId: "user-auth-password",
  storageBucket: "user-auth-password.appspot.com",
  messagingSenderId: "977711778232",
  appId: "1:977711778232:web:405aea8adf21c8e5c2a74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;