import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from 'firebase/auth'; // Import getAuth function
import { getFirestore, collection, doc, getDoc, addDoc, updateDoc,setDoc } from 'firebase/firestore';
import firebaseConfig from '../../backend/firebaseConfig';

const auth = getAuth(); // Initialize auth object
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(); // Initialize Firestore object

const Profile = () => {
  const [profileData, setProfileData] = useState({
    email: '',
    semester: '',
    name:"",
    roll_number: '',
    phone_number: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        auth.onAuthStateChanged(async(user)=> {
          setProfileData((prevData) => ({
            ...prevData,
            email: user.email || '',
          }));

          const docRef = doc(db, 'userprofiles', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setProfileData((prevData) => ({
              ...prevData,
              semester: userData.semester || '',
              roll_number: userData.roll_number || '',
              phone_number: userData.phone_number || '',
              name:userData.name || ""
            }));
          }
        })
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
      const user = auth.currentUser;
      if (!user) {
        console.log('User not authenticated');
        return;
      }
  
      const userId = user.uid;
  
      // Assuming profileData is an object containing the profile details
      const profileRef = doc(db, 'userprofiles', userId);
      await setDoc(profileRef, profileData);
  
      console.log('Profile updated successfully!');
      alert('Profile updated successfully!');
  
      // Navigate to home page
      window.location.href = '/home';
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };
  

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col  items-center justify-center">
      <div className="flex-grow"></div> {/* This creates space to push content upwards */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-96 border-4 border-black mt-8 mb-8">
          <h1 className="text-xl font-extrabold mb-4 text-center">Your Profile</h1>
          <div className="flex flex-col gap-3">
            <div className="bg-gray-200 p-2 rounded-lg shadow-inner">
              <p className="text-gray-600 mb-1">Email:</p>
              <input
                type="text"
                name="email"
                value={profileData.email || ''}
                readOnly
                className="w-full bg-gray-200 p-1 rounded-lg border border-gray-400"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg shadow-inner">
              <p className="text-gray-600 mb-1">Name:</p>
              <input
                type="text"
                name="name"
                value={profileData.name || ''}
                onChange={handleInputChange}
                className="w-full bg-gray-200 p-1 rounded-lg border border-gray-400"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg shadow-inner">
              <p className="text-gray-600 mb-1">Semester:</p>
              <input
                type="text"
                name="semester"
                value={profileData.semester || ''}
                onChange={handleInputChange}
                className="w-full bg-gray-200 p-1 rounded-lg border border-gray-400"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg shadow-inner">
              <p className="text-gray-600 mb-1">Roll Number:</p>
              <input
                type="text"
                name="roll_number"
                value={profileData.roll_number || ''}
                onChange={handleInputChange}
                className="w-full bg-gray-200 p-1 rounded-lg border border-gray-400"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded-lg shadow-inner">
              <p className="text-gray-600 mb-1">Phone Number:</p>
              <input
                type="text"
                name="phone_number"
                value={profileData.phone_number || ''}
                onChange={handleInputChange}
                className="w-full bg-gray-200 p-1 rounded-lg border border-gray-400"
              />
            </div>
           
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full" onClick={handleFormSubmit}>Save</button>

        </div>

        </div>
        <div className="flex-grow"></div> {/* This creates space to push content upwards */}
    </div>
  );
}

export default Profile;
