import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Navbar from '../Components/navbar';
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

const BlockchainEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events based on attendance from Firebase
    const fetchEvents = async () => {
      try {
        const attendanceSnapshot = await db.collection('aiattendance').get();
        const eventsData = [];

        attendanceSnapshot.forEach(async (doc) => {
          const attendanceData = doc.data();
          // Check if the user marked as present for this event
          if (attendanceData.status === 'Present') {
            // If present, fetch event details
            const eventSnapshot = await db.collection('ai-event-reg').doc(doc.id).get();
            if (eventSnapshot.exists) {
              const eventData = eventSnapshot.data();
              eventsData.push(eventData);
            }
          }
        });

        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-full">
        <Navbar />
      </div>

      <div className="flex-1 p-8 bg-gray-100">
        <Header />
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>

        <div className="grid gap-6">
          {events.map((event, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
              <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-gray-700 mb-1"><strong>Status:</strong> {event.status}</p>
              {event.status === 'Not approved' && (
                <p className="text-red-600"><strong>Reason:</strong> {event.reason}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainEvents;
