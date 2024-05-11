import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminCyberEvents = () => {
    const [events, setEvents] = useState([
        {
            title: 'Blockchain Workshop',
            date: 'April 10, 2024',
            time: '2:00 PM',
            location: 'Room 101',
            description: 'A workshop on blockchain technology and its applications.',
        },
        {
            title: 'Blockchain Symposium',
            date: 'April 15, 2024',
            time: '10:00 AM',
            location: 'Auditorium',
            description: 'A symposium on the latest trends in AI and machine learning.',
        },
        // Add more events as needed
    ]);

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setEvents((prevEvents) => [...prevEvents, formData]);
        setFormData({
            title: '',
            date: '',
            time: '',
            location: '',
            description: '',
        });
    };

    const handleRemoveEvent = (index) => {
        setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="w-full lg:w-1/5">
                <AdminNavbar />
            </div>

            <div className="flex-1 p-4 lg:p-8 bg-gray-100">
                <Header />

                <h2 className="text-3xl font-bold mb-6 mt-10 text-gray-800">Upcoming Events</h2>

                <div className="grid gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                            <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
                            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>

                            <p className="text-gray-600 mb-4">{event.description}</p>

                            <div>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mr-2"
                                    onClick={() => handleRemoveEvent(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Add New Event</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 mb-1">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 mb-1">Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="time" className="block text-gray-700 mb-1">Time:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.time}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 mb-1">Location:</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 mb-1">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Event
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminCyberEvents;
