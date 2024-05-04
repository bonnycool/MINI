import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  return authToken ? children : <Navigate to="/credentials" />;
};

export default ProtectedRoute;
// Usage in a Router setup

