import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore';

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
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    semester: '',
    roll_number: '',
    phone_number: '',
  });
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('Saved successfully');
    } catch (error) {
      console.error('Error logging out:', error);
      setMessage('Error logging out');
    }
  };

  const fetchUserProfile = async (userId) => {
    const tableRef = collection(db, 'usercredentials');
    const q = query(tableRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setError('Couldnt get');
      return;
  }

    if (userDoc.exists) {
      const userData = userDoc.data();
      setProfileData((prevData) => ({
        ...prevData,
        email: userData.email || '',
        semester: userData.semester || '',
        roll_number: userData.roll_number || '',
        phone_number: userData.phone_number || '',
      }));
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      fetchUserProfile(userId);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Email:</p>
            <p className="font-bold text-xl">{profileData.email || ''}</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-gray-600">Name:</p>
            <input
              type="text"
              name="name"
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" onClick={handleLogout}>Save</button>
      </div>
    </div>
  );
};

export default Profile;
