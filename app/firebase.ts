import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Kalıcılık tanımı burada yapılmazsa, sadece oturum anlık olur ama hata da çıkmaz

const firebaseConfig = {
  apiKey: "AIzaSyDRrVapcd8AfGQgYouzlhdInTsGeqBwmpc",
  authDomain: "healthfootapp.firebaseapp.com",
  projectId: "healthfootapp",
  storageBucket: "healthfootapp.firebasestorage.app",
  messagingSenderId: "211426909549",
  appId: "1:211426909549:web:f74ff3342dd56749340e64",
  measurementId: "G-CKW0YPQS1H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // initializeAuth yerine getAuth kullanılır

export { auth };
