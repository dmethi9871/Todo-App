import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARRAvyJCSquga6_gFjtbKPZguGCiBTv5s",
  authDomain: "todo-ebf15.firebaseapp.com",
  databaseURL: "https://todo-ebf15-default-rtdb.firebaseio.com",
  projectId: "todo-ebf15",
  storageBucket: "todo-ebf15.appspot.com",
  messagingSenderId: "390293403370",
  appId: "1:390293403370:web:8a7d3fd31245fcd7254993",
  // measurementId: "G-8DB202CS2T"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();

