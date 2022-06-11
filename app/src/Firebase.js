import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVTc0pXClY0TJx1P8_NR8pVTbl0O1Qs9A",
  authDomain: "not-twitter-ethen.firebaseapp.com",
  projectId: "not-twitter-ethen",
  storageBucket: "not-twitter-ethen.appspot.com",
  messagingSenderId: "194756940765",
  appId: "1:194756940765:web:6699abecfff692074f9c34",
  measurementId: "G-PT7SW0WPE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage =getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()