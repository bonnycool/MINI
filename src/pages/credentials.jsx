import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/header';
import backgroundImage from '../Assests/IMAGES/saintgitsbg.jpeg';
import axios from 'axios';

const Credentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState(''); // Error message for invalid login

  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');
    setLoginError(''); // Clear existing error messages

    if (!isValidUsername(username)) {
      setUsernameError('Use a valid saintgits email'); // Set error for invalid username
      return;
    }

    // Send POST request to verify login
    axios.post('http://127.0.0.1:8000/api/login/', { username, password })
      .then((response) => {
        if (response.status === 200) {
          navigate('/home');  // Successful login, navigate to home page
        }
      })
      .catch((error) => {
        // Display error message for failed login
        if (error.response && error.response.status === 401) {
          setLoginError('Invalid login credentials'); // Show "Invalid credentials" message
        } else {
          setLoginError('An unexpected error occurred. Please try again later.'); // General error handling
        }
      });
  };

  const isValidUsername = (username) => {
    const emailRegex = /^[^\s@]+@saintgits\.org$/; // Ensure valid email format
    return emailRegex.test(username);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="mb-4 w-1/2">
          <label htmlFor="username" className="block text-white mb-1">Username:</label>
          <input
            type="text"
            placeholder="Student Login"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value); // Update username
              setUsernameError(''); // Clear previous username error
            }}
            className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
          />
          {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}  
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="password" className="block text-white mb-1">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); // Update password
              setPasswordError(''); // Clear previous password error
            }}
            className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
          />
        </div>
        <div className="text-center w-1/4">
          <button
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            onClick={handleLogin}  // Trigger login
          >
            Login
          </button>
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>} 
        </div>
      </div>
    </div>
  );
};

export default Credentials;
