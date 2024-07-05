
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAVt-PT18cT_Jzlx3zHs0Ng4TaykNdSd-s",
    authDomain: "gitsconnect-aa3f5.firebaseapp.com",
    projectId: "gitsconnect-aa3f5",
    storageBucket: "gitsconnect-aa3f5.appspot.com",
    messagingSenderId: "229347354180",
    appId: "1:229347354180:web:f520ed4f2baceaeccffe11",
    measurementId: "G-JQHTHQTJ76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


