import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login"; // Import the Login component
import Interface from "../pages/interface";
export function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/interface" element={<Interface />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

    