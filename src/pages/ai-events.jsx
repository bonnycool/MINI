import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase"; // Adjust the path to your Firebase configuration
import { getDocs, collection } from 'firebase/firestore';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader'; // Import the Header component

const AIEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
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

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8 bg-gray-100">
                {/* Header component */}
                <UserHeader />

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
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600">
                                    Register
                                </button>
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

export default AIEvents;

