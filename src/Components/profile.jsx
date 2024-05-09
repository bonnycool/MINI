import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Function to get the stored token (if using token-based authentication)
const getAuthToken = () => {
  return localStorage.getItem('authToken'); // Adjust as needed
};

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authToken = getAuthToken();  // Get the stored token
        if (!authToken) {
          throw new Error('Authentication token not found');
        }
        const response = await axios.get('http://127.0.0.1:8000/api/get-profile/', {
          headers: {
            Authorization: `Bearer ${authToken}`,  // Include token in header
          },
        });
        setProfileData(response.data);  // Set the profile data from the response
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Error fetching profile');  // Display a friendly error message
      }
    };

    fetchProfile();  // Fetch the profile on component mount
  }, []);  // Run only on initial render

  // Destructure the profile data
  const { email, name, semester, roll_number, phone_number } = profileData;

  return (
    <div>
      <h1>Your Profile</h1>
      {message && <p>{message}</p>}  {/* Display message if there's an error */}
      <div>
        <p>Email: {email}</p>  {/* Display the email ID used for login */}
        <p>Name: {name || ''}</p> 
        <p>Semester: {semester || ''}</p> 
        <p>Roll Number: {roll_number || ''}</p> 
        <p>Phone Number: {phone_number || ''}</p> 
      </div>
    </div>
  );
};


export default Profile;
