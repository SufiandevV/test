import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALNlsUKs4IHBg42BmZfgFZG8fF58IX0e0",
    authDomain: "olearn-402e9.firebaseapp.com",
    projectId: "olearn-402e9",
    storageBucket: "olearn-402e9.appspot.com",
    messagingSenderId: "1082899678294",
    appId: "1:1082899678294:web:2c923b0ec00f53361727f7",
    measurementId: "G-TEDRN3SR8K"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth ,storage};