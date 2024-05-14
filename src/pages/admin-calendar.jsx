import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css'; // Import the CSS for react-calendar
import Calendar from 'react-calendar'; // Import the Calendar component
import AdminNavbar from '../Components/adminnavbar'; // Import the navbar component
import Header from '../Components/header'; // Import the header component
import { db } from "../../backend/firebase";
import { collection, getDocs } from 'firebase/firestore';

const AdminClubCalendar = () => {
    const [currentClub, setCurrentClub] = useState('AI');
    const [aiEvents, setAiEvents] = useState([]);
    const [blockchainEvents, setBlockchainEvents] = useState([]);
    const [cybersecurityEvents, setCybersecurityEvents] = useState([]);
    const [opensourceEvents, setOpensourceEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchClubEvents = async (clubCollection, setState) => {
                    const querySnapshot = await getDocs(collection(db, clubCollection));
                    const events = querySnapshot.docs.map(doc => {
                        const data = doc.data();
                        console.log(`Fetched event for ${clubCollection}:`, data); // Debugging log

                        let date = data.date;
                        if (date && date.toDate) {
                            date = date.toDate(); // Firestore timestamp
                        } else if (date && !(date instanceof Date)) {
                            date = new Date(date); // Handle string or other date formats
                        }

                        return {
                            id: doc.id,
                            ...data,
                            date: date,
                        };
                    });
                    setState(events);
                };

                await fetchClubEvents('events', setAiEvents);
                await fetchClubEvents('blockevents', setBlockchainEvents);
                await fetchClubEvents('cyberevents', setCybersecurityEvents);
                await fetchClubEvents('openevents', setOpensourceEvents);
            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        };

        fetchEvents();
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);

        const clubEventsMap = {
            'AI': aiEvents,
            'Blockchain': blockchainEvents,
            'Cybersecurity': cybersecurityEvents,
            'Opensource': opensourceEvents,
        };

        const currentClubEvents = clubEventsMap[currentClub];
        const event = currentClubEvents.find(event => event.date.toDateString() === date.toDateString());
        setSelectedEvent(event || null);
    };

    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            const clubEventsMap = {
                'AI': aiEvents,
                'Blockchain': blockchainEvents,
                'Cybersecurity': cybersecurityEvents,
                'Opensource': opensourceEvents,
            };

            const currentClubEvents = clubEventsMap[currentClub];
            const dayEvents = currentClubEvents.filter(event => event.date.toDateString() === date.toDateString());

            if (dayEvents.length > 0) {
                return (
                    <ul>
                        {dayEvents.map((event, index) => (
                            <li key={index}>{event.title}</li>
                        ))}
                    </ul>
                );
            }
        }
        return null;
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/5">
                <AdminNavbar />
            </div>

            <div className="flex-1 p-8">
                <Header />

                <div className="flex flex-col h-full">
                    <div className="mb-4 mt-8">
                        <h3 className="text-2xl font-bold mb-2">Select Club:</h3>
                        <button
                            onClick={() => setCurrentClub('AI')}
                            className={`mr-4 ${currentClub === 'AI' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded-md px-4 py-2`}
                        >
                            AI Club
                        </button>
                        <button
                            onClick={() => setCurrentClub('Blockchain')}
                            className={`mr-4 ${currentClub === 'Blockchain' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded-md px-4 py-2`}
                        >
                            Blockchain
                        </button>
                        <button
                            onClick={() => setCurrentClub('Cybersecurity')}
                            className={`mr-4 ${currentClub === 'Cybersecurity' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded-md px-4 py-2`}
                        >
                            Cybersecurity
                        </button>
                        <button
                            onClick={() => setCurrentClub('Opensource')}
                            className={`mr-4 ${currentClub === 'Opensource' ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded-md px-4 py-2`}
                        >
                            Opensource
                        </button>
                    </div>

                    <div className="flex-grow">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            className="w-full h-full bg-white rounded-lg shadow-md"
                            tileContent={renderTileContent}
                        />
                    </div>

                    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Event Details</h3>
                        {selectedEvent ? (
                            <>
                                <p><strong>Description:</strong> {selectedEvent.description}</p>
                                <p><strong>Time:</strong> {selectedEvent.time}</p>
                                <p><strong>Location:</strong> {selectedEvent.location}</p>
                            </>
                        ) : (
                            <p>No event</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminClubCalendar;
