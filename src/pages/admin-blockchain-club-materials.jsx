import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminBlockchainClubMaterials = () => {
    // State to manage events data with references and links
    const [events, setEvents] = useState([
        // Events data
    ]);

    // State to manage the form data for adding new events and links
    const [newEvent, setNewEvent] = useState({
        title: '',
        references: [],
    });
    const [newReference, setNewReference] = useState({
        title: '',
        link: '',
    });

    // Function to handle input changes in the new event form
    const handleNewEventChange = (e) => {
        // Handle input changes
    };

    // Function to handle input changes in the new reference form
    const handleNewReferenceChange = (e) => {
        // Handle input changes
    };

    // Function to add a new reference to the new event
    const addNewReferenceToEvent = () => {
        // Add new reference to the event
    };

    // Function to handle form submission for adding a new event
    const handleNewEventSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    // Function to remove an event
    const handleRemoveEvent = (index) => {
        // Remove event
    };

    // Function to remove a reference from an event
    const handleRemoveReference = (eventIndex, referenceIndex) => {
        // Remove reference from the event
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Navbar on the left side */}
            <div className="md:w-1/5 h-full">
                <AdminNavbar />
            </div>

            {/* Main content area */}
            <div className="flex-1 h-full p-8 mt-10 bg-gray-100">
                {/* Header component */}
                <Header />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-6">
                    {/* Events */}
                    {events.map((event, eventIndex) => (
                        <div key={eventIndex} className="bg-white p-4 rounded-lg shadow-md">
                            {/* Event title */}
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            {/* References and links */}
                            <ul className="space-y-2">
                                {/* References */}
                            </ul>

                            {/* Remove event button */}
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-4"
                            >
                                Remove Event
                            </button>
                        </div>
                    ))}

                    {/* Form for adding new events */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Add New Event</h3>
                        <form onSubmit={handleNewEventSubmit}>
                            {/* Event title input */}
                            <div className="mb-4">
                                {/* Event title input field */}
                            </div>

                            {/* Form for adding new references */}
                            <h4 className="text-xl font-bold mb-2">Add References</h4>
                            <div className="mb-2">
                                {/* Reference title input field */}
                            </div>
                            <div className="mb-4">
                                {/* Reference link input field */}
                            </div>

                            {/* Buttons */}
                            <button
                                type="button"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
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

export default AdminBlockchainClubMaterials;
