import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import BlockAdminNavbar from '../Components/block-admin-navbar';
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

const AdminBlockDutyLeave = () => {
  const [eventRegistrations, setEventRegistrations] = useState([]);

  useEffect(() => {
    const fetchEventRegistrations = async () => {
      const eventRegistrationsRef = db.collection('blockeventreg');
      const snapshot = await eventRegistrationsRef.get();
      const registrationsData = await Promise.all(snapshot.docs.map(async (doc) => {
        const data = doc.data();
        const attendanceDoc = await db.collection('blockattendance').doc(doc.id).get();
        const attendanceData = attendanceDoc.data();
        const status = attendanceData ? attendanceData.attendanceStatus[data.userId] : '';
        return { id: doc.id, ...data, status, attendanceMarked: !!status };
      }));
      setEventRegistrations(registrationsData);
    };

    fetchEventRegistrations();
  }, []);

  const handleAttendance = async (eventId, userId, status) => {
    try {
      const eventRegDoc = await db.collection('blockeventreg').doc(eventId).get();
      const eventData = eventRegDoc.data();

      const attendanceRef = db.collection('blockattendance').doc(eventId);
      await attendanceRef.set({
        ...eventData,
        attendanceStatus: { ...eventData.attendanceStatus, [userId]: status }
      }, { merge: true });

      setEventRegistrations(prevRegistrations =>
        prevRegistrations.map(registration =>
          registration.id === eventId
            ? { ...registration, status, attendanceMarked: true }
            : registration
        )
      );

      alert('Attendance updated successfully!');
    } catch (error) {
      console.error('Error updating attendance:', error);
      alert('Failed to update attendance. Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Section A: Sidebar */}
      <div className="w-full md:w-1/5 h-full">
        <BlockAdminNavbar />
      </div>

      {/* Section B: Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Header */}
        <Header />
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Event Registrations</h2>

        {/* Table for Event Registrations */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-black">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-black text-center font-bold">Name</th>
                <th className="py-2 px-4 border-b border-black text-center font-bold">Email</th>
                <th className="py-2 px-4 border-b border-black text-center font-bold">Event Name</th>
                <th className="py-2 px-4 border-b border-black text-center font-bold">Date</th>
                <th className="py-2 px-4 border-b border-black text-center font-bold">Status</th>
                <th className="py-2 px-4 border-b border-black text-center font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventRegistrations.map((registration, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-black text-center">{registration.name}</td>
                  <td className="py-2 px-4 border-b border-black text-center">{registration.email}</td>
                  <td className="py-2 px-4 border-b border-black text-center">{registration.eventname}</td>
                  <td className="py-2 px-4 border-b border-black text-center">{new Date(registration.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-black text-center">{registration.status}</td>
                  <td className="py-2 px-4 border-b border-black text-center">
                    <div className="flex justify-center space-x-2">
                      {/* Button for marking Present */}
                      <button
                        className={`bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 ${registration.attendanceMarked ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handleAttendance(registration.id, registration.userId, 'Present')}
                        disabled={registration.attendanceMarked}
                      >
                        Present
                      </button>
                      {/* Button for marking Absent */}
                      <button
                        className={`bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 ${registration.attendanceMarked ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handleAttendance(registration.id, registration.userId, 'Absent')}
                        disabled={registration.attendanceMarked}
                      >
                        Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBlockDutyLeave;
