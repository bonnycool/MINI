import React, { useState, useEffect } from 'react';
import * as firebase from '@firebase/app';

import '@firebase/firestore';
//import '@firebase/auth';

import desktopBackground from '../Assests/IMAGES/saintgitsbg.jpeg';
import mobileBackground from '../Assests/imagesroni/Login.jpg';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/headerlogin';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

const Credentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userDoc = await firebase.firestore().collection('usercredentials').doc(username).get();
      if (!userDoc.exists) {
        setError('Invalid username or password');
        return;
      }

      const userData = userDoc.data();
      const hashedPassword = userData.password; // Get hashed password from Firestore
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword); // Compare hashed passwords

      if (isPasswordCorrect) {
        navigate('/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An unexpected error occurred.');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImage = isMobile ? mobileBackground : desktopBackground;

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-cover bg-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center w-full sm:w-3/4 md:w-1/2">
        <div className="mb-4 w-full sm:w-3/4 md:w-1/2 input-box">
          <label htmlFor="username" className="block text-white mb-1">Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full p-2 rounded bg-white text-black border border-gray-300 text-center input-box`}
          />
        </div>

        <div className="mb-4 w-full sm:w-3/4 md:w-1/2 input-box">
          <label htmlFor="password" className="block text-white mb-1">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 rounded bg-white text-black border border-gray-300 text-center input-box`}
          />
        </div>

        <div className="text-center w-1/3 button">
          <button
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 button"
            onClick={handleLogin}
          >
            Login
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
