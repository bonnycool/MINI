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
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');
    setLoginError('');

    if (!isValidUsername(username)) {
      setUsernameError('Use saintgits mail');
      return;
    }

    axios.post('http://127.0.0.1:8000/api/login/', { username, password })
      .then((response) => {
        if (response.status === 200) {
          navigate('/home');  // Navigate to home page on successful login
        }
      })
      .catch((error) => {
        setLoginError('Invalid login credentials');  // Show error on failed login
      });

  };

  const isValidUsername = (username) => {
    const emailRegex = /^[^\s@]+@saintgits\.org$/;
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
            id="username"
            placeholder="Student Login"
            className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="password" className="block text-white mb-1">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>
        <div className="text-center w-1/4">
          <button
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credentials;