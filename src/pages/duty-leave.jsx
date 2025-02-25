import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const BlockchainEvents = () => {
    // Sample events data with status and reason
    const events = [
        {
            title: 'Blockchain Workshop',
            date: 'April 10, 2024',
            time: '2:00 PM',
            location: 'Room 101',
            description: 'A workshop on blockchain technology and its applications.',
            status: 'Approved',
        },
        {
            title: 'AI Symposium',
            date: 'April 15, 2024',
            time: '10:00 AM',
            location: 'Auditorium',
            description: 'A symposium on the latest trends in AI and machine learning.',
            status: 'Not approved',
            reason: 'Invalid request',
        },
        // Add more events as needed
    ];

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
                    {events.map((event, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                            {/* Event title */}
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            {/* Event details */}
                            <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                            <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
                            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>

                            {/* Event description */}
                            <p className="text-gray-600 mb-4">{event.description}</p>

                            {/* Status */}
                            <p className="text-gray-700 mb-1"><strong>Status:</strong> {event.status}</p>

                            {/* Reason for not approved */}
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
