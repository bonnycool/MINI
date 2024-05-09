import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Function to get the stored token
const getAuthToken = () => {
  return localStorage.getItem('authToken');  // Retrieve the stored token
};

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // For navigation on error or logout

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authToken = getAuthToken();  // Get the stored token
        if (!authToken) {
          throw new Error("Authentication token not found");
        }

        // Make the API request with the Authorization header
        const response = await axios.get('http://127.0.0.1:8000/api/get-profile/', {
          headers: {
            Authorization: `Bearer ${authToken}`,  // Include token in the header
          },
        });

        // Set the profile data on successful response
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        
        if (error.response && error.response.status === 403) {
          setMessage("Session expired or unauthorized. Please log in again.");
          navigate("/home");  // Redirect to login if unauthorized
        } else {
          setMessage("Error fetching profile.");
        }
      }
    };

    fetchProfile();  // Fetch profile data on component mount
  }, [navigate]);  // Include navigate in the dependency array to avoid closure issues

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
