import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Implement your custom authentication check here
  // For example, check if a token is present in localStorage or sessionStorage
  const authToken = localStorage.getItem('authToken');
  return authToken ? true : false;
};

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = isAuthenticated();
  return isLoggedIn ? children : <Navigate to="/credentials" />;
};

export default ProtectedRoute;
