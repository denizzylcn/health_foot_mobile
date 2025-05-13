import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDRrVapcd8AfGQgYouzlhdInTsGeqBwmpc",
  authDomain: "healthfootapp.firebaseapp.com",
  projectId: "healthfootapp",
  storageBucket: "healthfootapp.appspot.com",
  messagingSenderId: "211426909549",
  appId: "1:211426909549:web:f74ff3342dd56749340e64",
  measurementId: "G-CKW0YPQS1H"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
