import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminDutyLeave = () => {
    // Initial events data
    const initialEvents = [
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

    // State to hold the list of events
    const [events, setEvents] = useState(initialEvents);

    // State to hold the form data for a new or edited event
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        status: 'Approved',
        reason: '',
    });

    // Function to handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Function to handle form submission for adding or editing an event
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newEvents = [...events];
        if (formData.index !== undefined) {
            // Editing an existing event
            newEvents[formData.index] = formData;
        } else {
            // Adding a new event
            newEvents.push(formData);
        }
        setEvents(newEvents);
        // Reset form data after submission
        setFormData({
            title: '',
            date: '',
            time: '',
            location: '',
            description: '',
            status: 'Approved',
            reason: '',
        });
    };

    // Function to handle editing an event
    const handleEditEvent = (index) => {
        setFormData({ ...events[index], index });
    };

    // Function to handle deleting an event
    const handleDeleteEvent = (index) => {
        const newEvents = events.filter((_, i) => i !== index);
        setEvents(newEvents);
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-full lg:w-1/5 h-auto lg:h-full">
                <AdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-4 lg:p-8 bg-gray-100">
                {/* Header component */}
                <Header />

                {/* Page header */}
                <h2 className="text-3xl font-bold mb-6  mt-10 text-gray-800">Upcoming Events</h2>

                {/* Event list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                            {/* Edit and Delete buttons */}
                            <div className="flex mt-4">
                                <button
                                    className="flex-shrink-0 bg-yellow-500 text-white py-1 px-3 mr-2 rounded-lg hover:bg-yellow-600"
                                    onClick={() => handleEditEvent(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="flex-shrink-0 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                                    onClick={() => handleDeleteEvent(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Form for adding/editing events */}
                <form className="mt-8" onSubmit={handleFormSubmit}>
                    <h3 className="text-2xl font-bold mb-4">Add/Edit Event</h3>
                    {/* Form inputs... */}
                </form>
            </div>
        </div>
    );
};

export default AdminDutyLeave;
