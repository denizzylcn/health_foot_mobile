import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRrVapcd8AfGQgYouzlhdInTsGeqBwmpc",
  authDomain: "healthfootapp.firebaseapp.com",
  projectId: "healthfootapp",
  storageBucket: "healthfootapp.firebasestorage.app",
  messagingSenderId: "211426909549",
  appId: "1:211426909549:web:f74ff3342dd56749340e64",
  measurementId: "G-CKW0YPQS1H"
};

// Firebase'i başlatıyoruz
const app = initializeApp(firebaseConfig);

// Authentication'ı oluşturup dışa aktarıyoruz
export const auth = getAuth(app);
