import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, getDoc, doc, getDocs, addDoc } from 'firebase/firestore';

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
    email: '',
    name: '',
    semester: '',
    roll_number: '',
    phone_number: '',
  });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;

      getUsername(userId);

      setProfileData((prevData) => ({
        ...prevData,
        email: user.email || '',
      }));

      // Fetch usernames
      const fetchUsernames = async () => {
        try {
          const usernamesQuerySnapshot = await getDocs(collection(db, 'usercredentials'));
          const fetchedUsernames = usernamesQuerySnapshot.docs.reduce((acc, doc) => {
            const userData = doc.data();
            acc[doc.id] = userData.username; // Assuming username is a field in the usercredentials document
            return acc;
          }, {});
          setProfileData((prevData) => ({
            ...prevData,
            email: fetchedUsernames[user.uid] || user.email || '',
          }));
        } catch (error) {
          console.error('Error fetching usernames: ', error);
        }
      };

      fetchUsernames();
    }
  }, []);

  const getUsername = async (userId) => {
    console.log(userId);
    const userRef = doc(collection(db, 'usercredentials'), userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists) {
      const userData = userDoc.data();
      setProfileData((prevData) => ({
        ...prevData,
        name: userData.username || '',
      }));
      console.log("Profile ", prevData);
    }
  };

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
              onChange={handleInputChange}
              className="w-full bg-gray-200 p-2 rounded-lg"
            />
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" onClick={handleFormSubmit}>Save</button>
      </div>
    </div>
  );
};

export default Profile;
