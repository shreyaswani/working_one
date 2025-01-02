import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADFXlLELKn-8iyINzZF2xSJyJwMDGvNi8",
  authDomain: "chat-b2457.firebaseapp.com",
  projectId: "chat-b2457",
  storageBucket: "chat-b2457.appspot.com",
  messagingSenderId: "108449723664",
  appId: "1:108449723664:web:623e4d1141f1b37ca62195"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
