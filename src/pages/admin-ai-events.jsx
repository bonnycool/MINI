import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component'
import { db } from "../../backend/firebase";
import { addDoc, collection, getDocs,deleteDoc,doc } from 'firebase/firestore';

const AdminAIEvents = () => {
    // State to manage events data
    const [events, setEvents] = useState([]);

    // State to manage the form data
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
    });

    // Function to handle changes in the form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    
    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add the new event to the Firestore collection
            const docRef = await addDoc(collection(db, 'events'), formData);
            console.log('Document written with ID: ', docRef.id);

            // Update the events state with the new event
            setEvents((prevEvents) => [...prevEvents, formData]);

            // Clear the form data
            setFormData({
                title: '',
                date: '',
                time: '',
                location: '',
                description: '',
            });

            // Display success message
            alert('Event added successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            // Display error message
            alert('Error adding event. Please try again later.');
        }
    };
    const handleRemoveEvent = async (id) => {
        console.log('Event ID:', id); // Add this line for debugging
        try {
            // Remove the event from Firestore
            await deleteDoc(doc(db, 'events', id));
            // Update the state to reflect the removal
            setEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
            alert('Event removed successfully!');
        } catch (error) {
            console.error('Error removing event: ', error);
            alert('Error removing event. Please try again later.');
        }
    };
    

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
                const fetchedEvents = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    // Check if 'date' field exists and is a valid Firestore timestamp
                    const date = data.date && data.date.toDate ? data.date.toDate() : null;
                    // Format the date if it's valid, otherwise use an empty string
                    const formattedDate = date ? date.toLocaleDateString() : '';
                    return { ...data, date: formattedDate };
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
                <AdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8 bg-gray-100">
                {/* Header component */}
                <Header />

                {/* Page header */}
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>

                {/* Event list */}
                <div className="grid gap-6">
                {events.map((event,index) => (
    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
        {/* Event title */}
        <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
        {/* Event details */}
        <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
        <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
        <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
        {/* Event description */}
        <p className="text-gray-600 mb-4">{event.description}</p>
        {/* Action buttons */}
        <div>
            <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mr-2"
                onClick={() =>{    console.log('Event ID:', event.id); handleRemoveEvent(event.id)}} // Pass the event id to handleRemoveEvent
            >
                Remove
            </button>
        </div>
    </div>
))}
                </div>

                {/* Form for adding new events */}
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

export default AdminAIEvents;
