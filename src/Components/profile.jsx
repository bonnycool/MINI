import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Import getAuth function
import { getFirestore, collection, doc, getDocs, addDoc, getDoc } from 'firebase/firestore';
import firebaseConfig from '../../backend/firebaseConfig';

const auth = getAuth(); // Initialize auth object
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(); // Initialize Firestore object

const Profile = ({ username }) => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    semester: '',
    roll_number: '',
    phone_number: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setProfileData((prevData) => ({
            ...prevData,
            email: user.email || '',
          }));
  
          const querySnapshot = await getDocs(collection(db, 'usercredentials'));
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            if (userData.username === user.username) {
              setProfileData((prevData) => ({
                ...prevData,
                email: userData.email || '',
                name: userData.name || '', // Set username here
                semester: userData.semester || '',
                roll_number: userData.roll_number || '',
                phone_number: userData.phone_number || '',
              }));
            }
          });
        } else {
          console.log('User is not signed in.');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
  
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'usercredentials'), profileData);
      console.log('Document written with ID: ', docRef.id);

      alert('Profile Updated successfully!');
    } catch (error) {
      console.error('Error : ', error);
      alert('Error . Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Email:</p>
            <input
              type="text"
              name="email"
              value={profileData.email || ''}
              readOnly
              className="w-full bg-gray-200 p-2 rounded-lg"
            />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Name:</p>
            <input
              type="text"
              name="username"
              value={profileData.name || ''}
              onChange={handleInputChange}
              className="w-full bg-gray-200 p-2 rounded-lg"
            />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Semester:</p>
            <input
              type="text"
              name="semester"
              value={profileData.semester || ''}
              onChange={handleInputChange}
              className="w-full bg-gray-200 p-2 rounded-lg"
            />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Roll Number:</p>
            <input
              type="text"
              name="roll_number"
              value={profileData.roll_number || ''}
              onChange={handleInputChange}
              className="w-full bg-gray-200 p-2 rounded-lg"
            />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Phone Number:</p>
            <input
              type="text"
              name="phone_number"
              value={profileData.phone_number || ''}
              onChange={handleInputChange}
              className="w-full bg-gray-200 p-2 rounded-lg"
            />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" onClick={handleFormSubmit}>Save</button>
      </div>
    </div>
  );
};

export default Profile;
