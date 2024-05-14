import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase"; // Adjust the path to your Firebase configuration
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import AdminNavbar from '../Components/adminnavbar';
import Header from '../Components/header';

const AdminOpensourceEvents = () => {
    const [events, setEvents] = useState([]);
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'openevents'), formData);
            console.log('Document written with ID: ', docRef.id);

            setEvents((prevEvents) => [...prevEvents, { ...formData, id: docRef.id }]);
            setFormData({
                title: '',
                date: '',
                time: '',
                location: '',
                description: '',
            });

            alert('Event added successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error adding event. Please try again later.');
        }
    };

    const handleRemoveEvent = async (eventId) => {
        console.log('Attempting to remove event with ID:', eventId);
        try {
            const eventDocRef = doc(db, 'openevents', eventId);
            console.log('Document reference:', eventDocRef);
            await deleteDoc(eventDocRef);
            setEvents((prevEvents) => prevEvents.filter((e) => e.id !== eventId));
            alert('Event removed successfully!');
        } catch (error) {
            console.error('Error removing event: ', error);
            alert('Error removing event. Please try again later.');
        }
    };

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

    return (
        <div className="flex h-screen">
            <div className="w-1/5 h-full">
                <AdminNavbar />
            </div>

            <div className="flex-1 p-8 bg-gray-100">
                <Header />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>

                <div className="grid gap-6">
                    {events.map((event) => (
                        <div key={event.id} className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
                            <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                            <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
                            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                            <div>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mr-2"
                                    onClick={() => handleRemoveEvent(event.id)}
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

export default AdminOpensourceEvents;
