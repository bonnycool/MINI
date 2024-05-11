import React, { useState, useEffect } from 'react';
import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import desktopBackground from '../Assests/IMAGES/saintgitsbg.jpeg';
import mobileBackground from '../Assests/imagesroni/Login.jpg';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/headerlogin';

// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyAVt-PT18cT_Jzlx3zHs0Ng4TaykNdSd-s",
    authDomain: "gitsconnect-aa3f5.firebaseapp.com",
    projectId: "gitsconnect-aa3f5",
    storageBucket: "gitsconnect-aa3f5.appspot.com",
    messagingSenderId: "229347354180",
    appId: "1:229347354180:web:f520ed4f2baceaeccffe11",
    measurementId: "G-JQHTHQTJ76"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Initialize Firestore

const Credentials = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Query Firestore for the user document based on the username
      const userSnapshot = await db.collection('usercredentials').doc('login').where('username', '==', username).get();
    
      // Check if the document exists
      if (userSnapshot.empty) {
        setError('Invalid username or password');
        return;
      }
    
      // Get the first document (assuming there's only one user per username)
      const userData = userSnapshot.docs[0].data();
    
      // Retrieve the password from the user document
      const storedPassword = userData.password;
    
      // Compare the entered password with the stored password
      if (password === storedPassword) {
        navigate('/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
