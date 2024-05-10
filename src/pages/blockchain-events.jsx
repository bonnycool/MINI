import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const BlockchainEvents = () => {
    // Sample events data
    const events = [
        {
            title: 'Blockchain Workshop',
            date: 'April 10, 2024',
            time: '2:00 PM',
            location: 'Room 101',
            description: 'A workshop on blockchain technology and its applications.',
        },
        {
            title: 'AI Symposium',
            date: 'April 15, 2024',
            time: '10:00 AM',
            location: 'Auditorium',
            description: 'A symposium on the latest trends in AI and machine learning.',
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
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                            {/* Event title */}
                            <h3 className="text-2xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            {/* Event details */}
                            <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
                            <p className="text-gray-700 mb-2"><strong>Time:</strong> {event.time}</p>
                            <p className="text-gray-700 mb-2"><strong>Location:</strong> {event.location}</p>

                            {/* Event description */}
                            <p className="text-gray-800 mb-4">{event.description}</p>

                            {/* Action buttons */}
                            <div className="flex justify-end">
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600">
                                    Register
                                </button>
                                <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                <a href="/club-calendar">
                                  <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                   Show in Calendar
                                   </button>
                                   </a>

                            
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockchainEvents;
