import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig"; // Assuming you store your Firebase config in a separate file

const app = initializeApp(firebaseConfig);

export default app;
