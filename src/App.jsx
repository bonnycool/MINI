import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { RouterPaths } from "./Components/Router";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from '../backend/firebase'; // Import the initialized Firebase app

function App() {
  useEffect(() => {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []); // Ensure useEffect runs only once when the component mounts

  return (
    <div className="app-container">
      <Router>
        <div className="overflow-container">
          <RouterPaths />
        </div>
      </Router>
    </div>
  );
}

export default App;

