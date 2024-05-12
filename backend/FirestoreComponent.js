import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


// Initialize Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyAVt-PT18cT_Jzlx3zHs0Ng4TaykNdSd-s",
  authDomain: "gitsconnect-aa3f5.firebaseapp.com",
  projectId: "gitsconnect-aa3f5",
  storageBucket: "gitsconnect-aa3f5.appspot.com",
  messagingSenderId: "229347354180",
  appId: "1:229347354180:web:f520ed4f2baceaeccffe11",
  measurementId: "G-JQHTHQTJ76"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Initialize Firestore

function MyComponent() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    // Fetch components from Firestore on component mount
    const fetchComponents = async () => {
      try {
        const componentCollection = collection(db, 'components');
        const componentSnapshot = await getDocs(componentCollection);
        const componentData = componentSnapshot.docs.map(doc => doc.data());
        setComponents(componentData);
      } catch (error) {
        console.error('Error fetching components: ', error);
      }
    };

    fetchComponents();
  }, []); // Empty dependency array ensures this effect runs only once on mount

}

export default MyComponent;
