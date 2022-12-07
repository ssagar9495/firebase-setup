import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDR2DsBMFsFLsO7T7-BMEXTPMmU7FbwZAg",
  authDomain: "flipkart-93b4f.firebaseapp.com",
  databaseURL: "https://flipkart-93b4f-default-rtdb.firebaseio.com",
  projectId: "flipkart-93b4f",
  storageBucket: "flipkart-93b4f.appspot.com",
  messagingSenderId: "266285478873",
  appId: "1:266285478873:web:4210f57f47d2029b2e9fc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
