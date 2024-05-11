import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import AdminNavbar from '../Components/adminnavbar';
import Header from '../Components/header';

const AdminClubCalendar = () => {
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

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const event = events[currentClub].find(event => event.date.toDateString() === date.toDateString());
        setSelectedEvent(event || null);
    };

    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
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
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="w-full lg:w-1/5">
                <AdminNavbar/>
            </div>

            <div className="flex-1 p-4 lg:p-8">
                <Header />
                
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="lg:mr-4 flex-grow">
                        <div className="mb-4 mt-8">
                            <h3 className="text-2xl font-bold mb-2">Select Club:</h3>
                            <div className="flex flex-wrap">
                                {Object.keys(events).map(club => (
                                    <button
                                        key={club}
                                        onClick={() => setCurrentClub(club)}
                                        className={`mr-4 mb-2 ${currentClub === club ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded-md px-4 py-2`}
                                    >
                                        {club}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:mb-4">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                className="w-full h-full bg-white rounded-lg shadow-md"
                                tileContent={renderTileContent}
                            />
                        </div>
                    </div>

                    <div className="lg:ml-4 flex-grow">
                        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Event Details</h3>
                            {selectedEvent ? (
                                <>
                                    <p><strong>Description:</strong> {selectedEvent.description}</p>
                                    <p><strong>Time:</strong> {selectedEvent.time}</p>
                                    <p><strong>Conducted By:</strong> {selectedEvent.conductedBy}</p>
                                </>
                            ) : (
                                <p>No event</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminClubCalendar;
