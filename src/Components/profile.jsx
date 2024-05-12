import React, { useEffect, useState } from 'react';
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
      </div>
    </div>
  );
};

export default Profile;