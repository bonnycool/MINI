import React from 'react';
import 'tailwindcss/tailwind.css';

import { RouterPaths } from "./Components/Router";
import { BrowserRouter as Router } from "react-router-dom";
// Import the Navbar component




function App() {
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
