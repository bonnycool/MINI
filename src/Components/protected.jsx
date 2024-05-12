import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated
        setIsLoggedIn(true);
      } else {
        // User is not authenticated
        setIsLoggedIn(false);
      }
      unsubscribe();
    });
  }, [auth]);

  return isLoggedIn ? children : <Navigate to="/credentials" />;
};

export default ProtectedRoute;