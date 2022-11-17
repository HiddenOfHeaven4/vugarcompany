// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {

    apiKey: "AIzaSyDdlfNRga1vJP9Hu8j_gUOEj3qcrP0Y0Ac",
  
    authDomain: "r-r-cons.firebaseapp.com",
  
    projectId: "r-r-cons",
  
    storageBucket: "r-r-cons.appspot.com",
  
    messagingSenderId: "898081035407",
  
    appId: "1:898081035407:web:ecfef0da0795dec491ccfa"
  
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
