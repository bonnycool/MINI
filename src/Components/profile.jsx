import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Function to get the stored token
const getAuthToken = () => {
  return localStorage.getItem('authToken'); // Retrieve the stored token
};

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authToken = getAuthToken();
        if (!authToken) {
          throw new Error("Authentication token not found");
        }

        const response = await axios.get('http://127.0.0.1:8000/api/get-profile/', {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include token in the request header
          },
        });

        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        
        if (error.response && error.response.status === 401) {
          setErrorMessage("Session expired or unauthorized. Please log in again.");
          navigate("/home"); // Redirect to login
        } else {
          setErrorMessage("Error fetching profile.");
        }
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
      </div>
    </div>
  );
};

export default Profile;
