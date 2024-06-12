import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";
 
 const firebaseConfig = {

    apiKey: "AIzaSyA4MytCDKRApQIbLmRzWTVimZo5nYKCIwE",
  
    authDomain: "app-esportes-8c823.firebaseapp.com",
  
    projectId: "app-esportes-8c823",
  
    storageBucket: "app-esportes-8c823.appspot.com",
  
    messagingSenderId: "741182360476",
  
    appId: "1:741182360476:web:939c335b9440de27211659"
  
  };
  
 
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
