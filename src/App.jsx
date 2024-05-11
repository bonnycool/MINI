import { initializeApp } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { RouterPaths } from "./Components/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { getAuth } from 'firebase/auth'; // Changed import to use `getAuth` method
import firebaseConfig from '../backend/firebaseConfig'; // Import your Firebase configuration


// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication

function App() {
  
  return (
    <div className="app-container">
      <Router>
        <div className="overflow-container">
          <RouterPaths />
        </div>
      </Router>
      <div></div>
    </div>
  );
}

export default App;
