import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for react-calendar
import Calendar from 'react-calendar'; // Import the Calendar component
import AdminNavbar from '../Components/adminnavbar'; // Import the navbar component
import Header from '../Components/header'; // Import the header component

const AdminCalendar = () => {
    // State to manage the current club and its events
    const [currentClub, setCurrentClub] = useState('Blockchain');
    const [events, setEvents] = useState({
        Blockchain: [
            { date: new Date(2024, 3, 10), description: 'Blockchain Event', time: '2 PM', conductedBy: 'John Doe' },
        ],
        Cybersecurity: [
            { date: new Date(2024, 3, 15), description: 'Cybersecurity Event', time: '11 AM', conductedBy: 'Jane Doe' },
        ],
        Opensource: [
            { date: new Date(2024, 3, 20), description: 'Opensource Event', time: '3 PM', conductedBy: 'Mark Smith' },
        ],
        AI: [
            { date: new Date(2024, 3, 25), description: 'AI Event', time: '4 PM', conductedBy: 'Alice Johnson' },
        ],
    });
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [newEvent, setNewEvent] = useState({ date: '', description: '', time: '', conductedBy: '' });

    // Handle date selection from the calendar
    const handleDateChange = (date) => {
        setSelectedDate(date);

        // Check if there is an event for the selected date in the current club
        const event = events[currentClub].find(event => event.date.toDateString() === date.toDateString());
        setSelectedEvent(event || null);
    };

    // Handle changes to the new event form
    const handleNewEventChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({
            ...newEvent,
            [name]: value,
        });
    };

    // Add a new event to the state
    const handleAddEvent = () => {
        // Parse the date input
        const eventDate = new Date(newEvent.date);

        // Check if the new event is valid
        if (eventDate && newEvent.description && newEvent.time && newEvent.conductedBy) {
            // Add the new event to the appropriate club's list of events
            const updatedEvents = {
                ...events,
                [currentClub]: [...events[currentClub], {
                    date: eventDate,
                    description: newEvent.description,
                    time: newEvent.time,
                    conductedBy: newEvent.conductedBy,
                }],
            };

            // Update the events state
            setEvents(updatedEvents);

            // Clear the newEvent form after adding
            setNewEvent({ date: '', description: '', time: '', conductedBy: '' });
        }
    };

    // Remove an event from the state
    const handleRemoveEvent = () => {
        if (selectedEvent) {
            // Remove the selected event from the appropriate club's list of events
            setEvents({
                ...events,
                [currentClub]: events[currentClub].filter(event => event !== selectedEvent),
            });
            setSelectedEvent(null);
        }
    };

    // Render events on the calendar
    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            // Filter events for the current club and date
            const dayEvents = events[currentClub].filter(event => event.date.toDateString() === date.toDateString());
            if (dayEvents.length > 0) {
                return (
                    <ul>
                        {dayEvents.map((event, index) => (
                            <li key={index}>{event.description}</li>
                        ))}
                    </ul>
                );
            }
        }
        return null;
    };

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5">
                <AdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8">
                {/* Header component */}
                <Header />

                {/* Content area */}
                <div className="flex flex-col h-full">
                    {/* Club selection */}
                    <div className="mb-4 mt-10">
                        <h3 className="text-2xl font-bold mb-2">Select Club:</h3>
                        <button
                            onClick={() => setCurrentClub('Blockchain')}
                            className={`mr-4 ${currentClub === 'Blockchain' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        >
                            Blockchain
                        </button>
                        <button
                            onClick={() => setCurrentClub('Cybersecurity')}
                            className={`mr-4 ${currentClub === 'Cybersecurity' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        >
                            Cybersecurity
                        </button>
                        <button
                            onClick={() => setCurrentClub('Opensource')}
                            className={`mr-4 ${currentClub === 'Opensource' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        >
                            Opensource
                        </button>
                        <button
                            onClick={() => setCurrentClub('AI')}
                            className={`mr-4 ${currentClub === 'AI' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        >
                            AI Club
                        </button>
                    </div>

                    {/* Calendar */}
                    <div className="flex-grow">
                        {/* Calendar component */}
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            className="w-full h-full"
                            tileContent={renderTileContent} // Render events on the calendar
                        />
                    </div>

                    {/* Event description box */}
                    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Event Details</h3>
                        {selectedEvent ? (
                            <>
                                <p><strong>Description:</strong> {selectedEvent.description}</p>
                                <p><strong>Time:</strong> {selectedEvent.time}</p>
                                <p><strong>Conducted By:</strong> {selectedEvent.conductedBy}</p>
                                <button
                                    className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                                    onClick={handleRemoveEvent}
                                >
                                    Remove Event
                                </button>
                            </>
                        ) : (
                            <p>No event</p>
                        )}
                    </div>

                    {/* Form to add new events */}
                    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Add New Event</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="date"
                                name="date"
                                value={newEvent.date}
                                onChange={handleNewEventChange}
                                className="block mb-2 p-2 border border-gray-300 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Event description"
                                value={newEvent.description}
                                onChange={handleNewEventChange}
                                className="block mb-2 p-2 border border-gray-300 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="time"
                                placeholder="Event time"
                                value={newEvent.time}
                                onChange={handleNewEventChange}
                                className="block mb-2 p-2 border border-gray-300 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="conductedBy"
                                placeholder="Conducted by"
                                value={newEvent.conductedBy}
                                onChange={handleNewEventChange}
                                className="block mb-2 p-2 border border-gray-300 rounded"
                                required
                            />
                            <button
                                className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
                                onClick={handleAddEvent}
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

export default AdminCalendar;
