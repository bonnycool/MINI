import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import AdminNavbar from '../Components/adminnavbar';
import Header from '../Components/header';

const firebaseConfig = {
    apiKey: "AIzaSyAVt-PT18cT_Jzlx3zHs0Ng4TaykNdSd-s",
    authDomain: "gitsconnect-aa3f5.firebaseapp.com",
    projectId: "gitsconnect-aa3f5",
    storageBucket: "gitsconnect-aa3f5.appspot.com",
    messagingSenderId: "229347354180",
    appId: "1:229347354180:web:f520ed4f2baceaeccffe11",
    measurementId: "G-JQHTHQTJ76"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const AdminAiDutyLeave = () => {
  const [eventRegistrations, setEventRegistrations] = useState([]);

  useEffect(() => {
    // Fetch event registrations from Firebase
    const fetchEventRegistrations = async () => {
      const eventRegistrationsRef = db.collection('ai-event-reg');
      const snapshot = await eventRegistrationsRef.get();
      const registrationsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEventRegistrations(registrationsData);
    };

    fetchEventRegistrations();
  }, []);

  // Function to handle attendance and update Firestore
  const handleAttendance = async (eventId, userId, status) => {
    try {
      // Fetch the event registration details
      const eventRegDoc = await db.collection('aieventreg').doc(eventId).get();
      const eventData = eventRegDoc.data();
  
      // Update the attendance database with the event details
      const attendanceRef = db.collection('aiattendance').doc(eventId);
      await attendanceRef.set({
        ...eventData, // Copy all event registration details
        [userId]: status // Update the attendance status for the user
      }, { merge: true });
  
      alert('Attendance updated successfully!');
    } catch (error) {
      console.error('Error updating attendance:', error);
      alert('Failed to update attendance. Please try again.');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-full">
        <AdminNavbar />
      </div>

      <div className="flex-1 p-8 bg-gray-100">
        <Header />
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Event Registrations</h2>

        <div className="grid gap-6">
          {eventRegistrations.map((registration, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{registration.userName}</h3>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> {registration.email}</p>
              <p className="text-gray-700 mb-1"><strong>Event Name:</strong> {registration.eventname}</p>
              <p className="text-gray-700 mb-1"><strong>Status:</strong> {registration.status}</p>
              <div className="flex mt-4">
                <button
                  className={`bg-green-500 text-white py-1 px-3 mr-2 rounded-lg hover:bg-green-600 ${registration.status === 'Present' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handleAttendance(registration.eventId, registration.userId, 'Present')}
                  disabled={registration.status === 'Present'}
                >
                  Present
                </button>
                <button
                  className={`bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 ${registration.status === 'Absent' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handleAttendance(registration.eventId, registration.userId, 'Absent')}
                  disabled={registration.status === 'Absent'}
                >
                  Absent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAiDutyLeave;
