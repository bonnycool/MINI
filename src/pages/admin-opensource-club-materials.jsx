import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase";
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import AdminNavbar from '../Components/adminnavbar';
import Header from '../Components/header';

const AdminOpenSourceClubMaterials = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        session: '',
        date: '',
        references: [],
    });
    const [newReference, setNewReference] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddReference = (e) => {
        e.preventDefault();
        if (newReference) {
            setFormData((prevData) => ({
                ...prevData,
                references: [...prevData.references, newReference],
            }));
            setNewReference('');
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'opensourceclubmaterials'), formData);
            console.log('Document written with ID: ', docRef.id);

            setEvents((prevEvents) => [...prevEvents, { ...formData, id: docRef.id }]);
            setFormData({
                session: '',
                date: '',
                references: [],
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
            const eventDocRef = doc(db, 'opensourceclubmaterials', eventId);
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
                const querySnapshot = await getDocs(collection(db, 'opensourceclubmaterials'));
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
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Club Materials</h2>

                <div className="grid gap-6">
                    {events.map((event) => (
                        <div key={event.id} className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.session}</h3>
                            <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
                            <p className="text-gray-700 mb-1"><strong>References:</strong></p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                {Array.isArray(event.references) && event.references.map((ref, index) => (
                                    <li key={index}><a href={ref} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{ref}</a></li>
                                ))}
                            </ul>
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
                    <h3 className="text-2xl font-bold mb-4">Add New Club Materials</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="session" className="block text-gray-700 mb-1">Session:</label>
                            <input
                                type="text"
                                id="session"
                                name="session"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.session}
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
                            <label htmlFor="references" className="block text-gray-700 mb-1">References:</label>
                            <ul className="list-disc list-inside mb-2">
                                {formData.references.map((ref, index) => (
                                    <li key={index} className="text-gray-600">{ref}</li>
                                ))}
                            </ul>
                            <div className="flex">
                                <input
                                    type="url"
                                    id="newReference"
                                    name="newReference"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={newReference}
                                    onChange={(e) => setNewReference(e.target.value)}
                                    placeholder="Add reference link"
                                />
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 ml-2"
                                    onClick={handleAddReference}
                                >
                                    Add Reference
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Club Materials
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminOpenSourceClubMaterials;
