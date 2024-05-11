import React from 'react';
import Navbar from '../Components/navbar';
import Header from '../Components/header';

const CyberEvents = () => {
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
    ];

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-1 p-8 bg-gray-100">
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((event, index) => (
                            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
                                <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                                <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
                                <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                                    Register
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberEvents;

