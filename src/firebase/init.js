import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1ktcwr04K8YjD5BX15FBGkIdPsC6xALI",
    authDomain: "week7-kt.firebaseapp.com",
    projectId: "week7-kt",
    storageBucket: "week7-kt.appspot.com",
    messagingSenderId: "288004909811",
    appId: "1:288004909811:web:20d723b45c9a7a779a6586",
    measurementId: "G-EX34YF1E3J"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  const db = getFirestore();
  export default db

  