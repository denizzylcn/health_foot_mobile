import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDRrVapcd8AfGQgYouzlhdInTsGeqBwmpc",
  authDomain: "healthfootapp.firebaseapp.com",
  projectId: "healthfootapp",
  storageBucket: "healthfootapp.appspot.com",
  messagingSenderId: "211426909549",
  appId: "1:211426909549:web:f74ff3342dd56749340e64"
};

// Duplicate app hatasını önlemek için koruma
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;


