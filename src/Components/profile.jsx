import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-profile/');
        const { email, name, semester, roll_number, phone_number } = response.data;
        setEmail(email);
        setName(name || '');
        setSemester(semester || '');
        setRollNumber(roll_number || '');
        setPhoneNumber(phone_number || '');
      } catch (error) {
        setMessage('Error fetching profile');
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/update-profile/', {
        name,
        semester,
        roll_number: rollNumber,
        phone_number: phoneNumber,
      });
      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Error updating profile');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: 'black', // Background color
        color: 'white', // Text color
      }}
    >
      <h1>Edit Profile</h1>
      {message && <p>{message}</p>}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px', // Space between form fields
          padding: '20px', // Padding for the form
          borderRadius: '10px', // Rounded corners
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent white background
        }}
      >
        <div>
          <label>Email: {email}</label>
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div>
          <label>Semester:</label>
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div>
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <button
          onClick={handleUpdateProfile}
          style={{
            backgroundColor: 'gray',
            color: 'white',
            padding: '10px 20px', // Padding for the button
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
