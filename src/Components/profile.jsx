import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {  
  apiKey: "AIzaSyAVt-PT18cT_Jzlx3zHs0Ng4TaykNdSd-s",
  authDomain: "gitsconnect-aa3f5.firebaseapp.com",
  projectId: "gitsconnect-aa3f5",
  storageBucket: "gitsconnect-aa3f5.appspot.com",
  messagingSenderId: "229347354180",
  appId: "1:229347354180:web:f520ed4f2baceaeccffe11",
  measurementId: "G-JQHTHQTJ76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      const message = 'Logged out successfully';
      console.log(message);
    } catch (error) {
      console.error('Error logging out:', error);
      const message = 'Error logging out';
      console.log(message);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      /* your fetchProfile code */
    };
    fetchProfile();
  }, []);

  const { email, name, semester, roll_number, phone_number } = profileData;

  return (
    <div className="profile-container p-6 bg-white rounded-lg shadow-md">
      <h1 className="profile-title text-2xl font-bold mb-4">Your Profile</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="profile-content">
        <div className="border p-4 mb-4">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Semester:</strong> {semester}</p>
          <p><strong>Phone Number:</strong> {phone_number}</p>
          <p><strong>Roll Number:</strong> {roll_number}</p>
        </div>
        <button className="logout-button bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
