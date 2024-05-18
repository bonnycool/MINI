import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase"; // Adjust the path to your Firebase configuration
import { getDocs, collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const OSEvents = () => {
    const [events, setEvents] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const auth = getAuth(); // Initialize Firebase Auth

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'openevents'));
                const fetchedEvents = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { ...data, id: doc.id };
                });
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        };

        fetchEvents();
    }, []);

    const handleRegister = async (eventId) => {
        const user = auth.currentUser; // Get the current user

        if (user) {
            const { uid, email } = user; // Get basic user details

            try {
                // Fetch additional user details from the Firestore `userprofiles` collection
                const userDoc = await getDoc(doc(db, 'userprofiles', uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const { name, semester, phone_number } = userData; // Extract additional user details

                    // Create a document in Firestore for the registration in `openeventreg` collection
                    await setDoc(doc(db, 'open-event-reg', `${eventId}_${uid}`), {
                        eventId,
                        uid,
                        name,
                        email,
                        semester,
                        phone_number,
                        registeredAt: new Date(),
                    });

                    // Update the registered events state
                    setRegisteredEvents([...registeredEvents, eventId]);

                    alert('Successfully registered for the event! Pending for approval.');
                } else {
                    alert('User details not found. Please complete your profile.');
                }
            } catch (error) {
                console.error('Error registering for event: ', error);
                alert('Failed to register for the event.');
            }
        } else {
            alert('You need to be logged in to register for an event.');
        }
    };

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8 bg-gray-100">
                {/* Header component */}
                <Header />

                {/* Page header */}
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>

                {/* Event list */}
                <div className="grid gap-6">
                    {events.map((event) => (
                        <div key={event.id} className="p-4 bg-white rounded-lg shadow-md">
                            {/* Event title */}
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            {/* Event details */}
                            <p className="text-gray-700 mb-1"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
                            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
                            <p className="text-gray-700 mb-1"><strong>Description:</strong> {event.description}</p>

                            {/* Action buttons */}
                            <div className="flex justify-end">
                                {registeredEvents.includes(event.id) ? (
                                    <button className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-4" disabled>
                                        Pending for Approval
                                    </button>
                                ) : (
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600"
                                        onClick={() => handleRegister(event.id)}
                                    >
                                        Register
                                    </button>
                                )}
                                <a href="/club-calendar" className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                    Show in Calendar
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OSEvents;
