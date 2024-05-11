// MyComponent.js
import React, { useEffect } from 'react';
import firebase from 'firebase/app';

function MyComponent() {
  useEffect(() => {
    // Initialize Firestore and add data on component mount
    const db = firebase.firestore();
    db.collection('users').add({
      name: 'Jane Smith',
      age: 25
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default MyComponent;
