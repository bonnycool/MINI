import React, { useState, useEffect } from 'react';
import desktopBackground from '../Assests/IMAGES/saintgitsbg.jpeg'; // Path to the desktop image
import mobileBackground from '../Assests/imagesroni/Login.jpg'; // Path to the mobile image

import { useNavigate } from 'react-router-dom';
import Header from '../Components/header';
import axios from 'axios';


const Credentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile breakpoint
    };

    window.addEventListener('resize', handleResize); // Add resize listener
    handleResize(); // Initial check for screen size

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []); // Run only on initial render

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');
    setLoginError(''); // Clear existing error messages

    if (!isValidUsername(username)) {
      setUsernameError('Use a valid saintgits email'); // Set error for invalid username
      return;
    }

    axios.post('http://127.0.0.1:8000/api/login/', { username, password })
      .then((response) => {
        if (response.status === 200) {
        const token = response.data.token; // Assuming the token is returned in 'data.token'
        localStorage.setItem('authToken', token); // Store the token in localStorage
          navigate('/home'); // Successful login, navigate to home page
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setLoginError('Invalid login credentials'); // Show "Invalid credentials" message
        } else {
          setLoginError('An unexpected error occurred.'); // General error handling
        }
      });
  };

  const isValidUsername = (username) => {
    const emailRegex = /^[^\s@]+@saintgits\.org$/;
    return emailRegex.test(username);
  };

  const backgroundImage = isMobile ? mobileBackground : desktopBackground; // Determine background

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-cover bg-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header /> {/* Render the header */}
      <div className="flex flex-col items-center justify-center w-full sm:w-3/4 md:w-1/2">
        {/* Apply 'input-box' class to input elements */}
        <div className="mb-4 w-full sm:w-3/4 md:w-1/2 input-box">
          <label htmlFor="username" className="block text-white mb-1">Username:</label>
          <input
            type="text"
            placeholder="Student Login"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError('');
            }}
            className={`w-full p-2 rounded bg-white text-black border border-gray-300 text-center input-box`} // Add class
          />
          {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
        </div>

        <div className="mb-4 w-full sm:w-3/4 md:w-1/2 input-box">
          <label htmlFor="password" className="block text-white mb-1">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            className={`w-full p-2 rounded bg-white text-black border border-gray-300 text-center input-box`} // Add class
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}  
        </div>

        <div className="text-center w-1/3 button">
          <button
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 button" // Apply class
            onClick={handleLogin}
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