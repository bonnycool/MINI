import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Navbar from '../Components/navbar';
import UserHeader from '../Components/userheader';

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

const BlockchainEvents = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    // Fetch attendance records from Firebase
    const fetchAttendanceRecords = async () => {
      try {
        const attendanceSnapshot = await db.collection('cyberattendance').get();
        const attendanceData = attendanceSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAttendanceRecords(attendanceData);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };

    fetchAttendanceRecords();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-full">
        <Navbar />
      </div>

      <div className="flex-1 p-8 bg-gray-100">
        <UserHeader />
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Attendance Records</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-black">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-black text-center">Event Name</th>
                <th className="py-2 px-4 border border-black text-center">Name</th>
                <th className="py-2 px-4 border border-black text-center">Attendance Status</th>
                <th className="py-2 px-4 border border-black text-center">Date</th>
                <th className="py-2 px-4 border border-black text-center">Reason</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border border-black text-center">{record.eventname}</td>
                  <td className="py-2 px-4 border border-black text-center">{record.name}</td>
                  <td className="py-2 px-4 border border-black text-center">
                    {typeof record.attendanceStatus === 'string' ? record.attendanceStatus : JSON.stringify(record.attendanceStatus)}
                  </td>
                  <td className="py-2 px-4 border border-black text-center">{new Date(record.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border border-black text-center">
                    {record.attendanceStatus === 'Not approved' && record.reason ? record.reason : 'N/A'}
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

export default BlockchainEvents;
