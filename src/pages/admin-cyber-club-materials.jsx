import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminCyberClubMaterials = () => {
    const [events, setEvents] = useState([
        {
            title: 'CyberSecurity Workshop',
            references: [
                {
                    title: 'Reference 1',
                    link: 'https://example.com/reference1',
                },
                {
                    title: 'Reference 2',
                    link: 'https://example.com/reference2',
                },
            ],
        },
        {
            title: 'CyberSecurity Symposium',
            references: [
                {
                    title: 'Reference A',
                    link: 'https://example.com/referenceA',
                },
                {
                    title: 'Reference B',
                    link: 'https://example.com/referenceB',
                },
            ],
        },
        {
            title: 'Opensource Seminar',
            references: [
                {
                    title: 'Resource 1',
                    link: 'https://example.com/resource1',
                },
                {
                    title: 'Resource 2',
                    link: 'https://example.com/resource2',
                },
            ],
        },
        {
            title: 'Cybersecurity Lecture',
            references: [
                {
                    title: 'Link 1',
                    link: 'https://example.com/link1',
                },
                {
                    title: 'Link 2',
                    link: 'https://example.com/link2',
                },
            ],
        },
    ]);

    const [newEvent, setNewEvent] = useState({
        title: '',
        references: [],
    });
    const [newReference, setNewReference] = useState({
        title: '',
        link: '',
    });

    const handleNewEventChange = (e) => {
        const { name, value } = e.target;
        setNewEvent((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNewReferenceChange = (e) => {
        const { name, value } = e.target;
        setNewReference((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addNewReferenceToEvent = () => {
        setNewEvent((prevData) => ({
            ...prevData,
            references: [...prevData.references, newReference],
        }));
        setNewReference({
            title: '',
            link: '',
        });
    };

    const handleNewEventSubmit = (e) => {
        e.preventDefault();
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setNewEvent({
            title: '',
            references: [],
        });
    };

    const handleRemoveEvent = (index) => {
        setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
    };

    const handleRemoveReference = (eventIndex, referenceIndex) => {
        setEvents((prevEvents) => {
            const updatedEvents = [...prevEvents];
            updatedEvents[eventIndex].references = updatedEvents[eventIndex].references.filter(
                (_, i) => i !== referenceIndex
            );
            return updatedEvents;
        });
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="w-full lg:w-1/5">
                <AdminNavbar />
            </div>

            <div className="flex-1 h-full p-4 lg:p-8 mt-10 bg-gray-100">
                <Header />

                <div className="flex flex-col gap-6 mt-6">
                    {events.map((event, eventIndex) => (
                        <div key={eventIndex} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            <ul className="space-y-2">
                                {event.references.map((reference, referenceIndex) => (
                                    <li key={referenceIndex}>
                                        <a href={reference.link} className="text-blue-500 hover:underline">
                                            {reference.title}
                                        </a>
                                        <button
                                            className="ml-2 text-red-500 hover:underline"
                                            onClick={() => handleRemoveReference(eventIndex, referenceIndex)}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-4"
                                onClick={() => handleRemoveEvent(eventIndex)}
                            >
                                Remove Event
                            </button>
                        </div>
                    ))}

                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Add New Event</h3>
                        <form onSubmit={handleNewEventSubmit}>
                            <div className="mb-4">
                                <label htmlFor="newEventTitle" className="block text-gray-700 mb-1">Title:</label>
                                <input
                                    type="text"
                                    id="newEventTitle"
                                    name="title"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={newEvent.title}
                                    onChange={handleNewEventChange}
                                    required
                                />
                            </div>

                            <h4 className="text-xl font-bold mb-2">Add References</h4>
                            <div className="mb-2">
                                <label htmlFor="newReferenceTitle" className="block text-gray-700 mb-1">Reference Title:</label>
                                <input
                                    type="text"
                                    id="newReferenceTitle"
                                    name="title"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={newReference.title}
                                    onChange={handleNewReferenceChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="newReferenceLink" className="block text-gray-700 mb-1">Reference Link:</label>
                                <input
                                    type="text"
                                    id="newReferenceLink"
                                    name="link"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={newReference.link}
                                    onChange={handleNewReferenceChange}
                                    required
                                />
                            </div>

                            <button
                                type="button"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
                                onClick={addNewReferenceToEvent}
                            >
                                Add Reference
                            </button>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 ml-5 rounded-lg hover:bg-blue-600"
                            >
                                Add Event
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCyberClubMaterials;
