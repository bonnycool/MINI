import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Function to get the stored token
const getAuthToken = () => {
  return localStorage.getItem('authToken'); // Retrieve the stored token
};

// Function to fetch profile data from the API
const fetchProfileData = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-profile/`);
    setProfileData(response.data);
  } catch (error) {
    handleErrorResponse(error);
  }
};
// Function to handle error responses
const handleErrorResponse = (error, navigate) => {
  if (error.response && error.response.status === 401) {
    setErrorMessage("Session expired or unauthorized. Please log in again.");
    navigate("/home"); // Redirect to login
  } else if (error.response && error.response.status === 500) {
    setErrorMessage("Internal server error. Please try again later.");
  } else {
    setErrorMessage("Error fetching profile.");
  }
=======
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
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

>>>>>>> 6eaf2ada4c6db4a234bd98abe5d57d5b2cc1e485
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
      setMessage('Error logging out');
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    const fetchProfile = async () => {
      try {
        const authToken = getAuthToken();
        if (!authToken) {
          throw new Error("Authentication token not found");
        }

        const data = await fetchProfileData(authToken);
        setProfileData(data);
      } catch (error) {
        handleErrorResponse(error, navigate);
      }
    };

    fetchProfile(); // Fetch profile data when the component is mounted
  }, [navigate]);

  return (
    <div>
      <h1>Your Profile</h1>
      {errorMessage && <p>{errorMessage}</p>} {/* Display error messages */}
      <div>
        <p>Email: {profileData.email}</p>
        <p>Name: {profileData.name || ''}</p>
        <p>Semester: {profileData.semester || ''}</p>
        <p>Roll Number: {profileData.roll_no || ''}</p>
        <p>Phone Number: {profileData.phone_number || ''}</p>
=======
    const fetchProfile = async () => { /* your fetchProfile code */ };
    fetchProfile();
  }, []);

  const { email, name, semester, roll_number, phone_number } = profileData;

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>
      {message && <p className="error-message">{message}</p>}
      <div className="profile-content">
        {/* your JSX code */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
>>>>>>> 6eaf2ada4c6db4a234bd98abe5d57d5b2cc1e485
      </div>
    </div>
  );
};

export default Profile;