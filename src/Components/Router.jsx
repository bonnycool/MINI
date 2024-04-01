import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login"; // Import the Login component
export function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

    