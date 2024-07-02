import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase";
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import AIAdminNavbar from '../Components/ai-admin-navbar';
import Header from '../Components/header';
import DropdownTable from '../Components/dropdowntable'; 

const AdminAIEvents = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        slots: ''
    });
    const [registrations, setRegistrations] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const docRef = await addDoc(collection(db, 'events'), {
                ...formData,
                remainingSlots: parseInt(formData.slots)
            });
            console.log('Document written with ID: ', docRef.id);

            setEvents((prevEvents) => [...prevEvents, { ...formData, id: docRef.id, remainingSlots: parseInt(formData.slots) }]);
            setFormData({
                title: '',
                date: '',
                time: '',
                location: '',
                description: '',
                slots: ''
            });

            alert('Event added successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error adding event. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleRemoveEvent = async (eventId) => {
        console.log('Attempting to remove event with ID:', eventId);
        try {
            const eventDocRef = doc(db, 'events', eventId);
            console.log('Document reference:', eventDocRef);
            await deleteDoc(eventDocRef);
            setEvents((prevEvents) => prevEvents.filter((e) => e.id !== eventId));
            alert('Event removed successfully!');
        } catch (error) {
            console.error('Error removing event: ', error);
            alert('Error removing event. Please try again later.');
        }
    };

    const handleApproveRegistration = async (regId, eventId) => {
        try {
            const regDocRef = doc(db, 'ai-event-reg', regId);
            await updateDoc(regDocRef, {
                status: 'Approved',
            });
            setRegistrations((prevRegs) => prevRegs.map((reg) =>
                reg.id === regId ? { ...reg, status: 'Approved' } : reg
            ));

            const eventDocRef = doc(db, 'events', eventId);
            const eventDoc = await getDoc(eventDocRef);
            const eventData = eventDoc.data();

            if (eventData.remainingSlots > 0) {
                await updateDoc(eventDocRef, {
                    remainingSlots: eventData.remainingSlots - 1,
                });
                setEvents((prevEvents) => prevEvents.map((event) =>
                    event.id === eventId ? { ...event, remainingSlots: event.remainingSlots - 1 } : event
                ));
            }

            alert('Registration approved successfully!');
        } catch (error) {
            console.error('Error approving registration: ', error);
            alert('Error approving registration. Please try again later.');
        }
    };

    const handleReject = async (regId, eventId) => {
        try {
            const regDocRef = doc(db, 'ai-event-reg', regId);
            await updateDoc(regDocRef, {
                status: 'Rejected',
            });
            setRegistrations((prevRegs) => prevRegs.map((reg) =>
                reg.id === regId ? { ...reg, status: 'Rejected' } : reg
            ));
            alert('Registration rejected successfully!');
        } catch (error) {
            console.error('Error rejecting registration: ', error);
            alert('Error rejecting registration. Please try again later.');
        }
    };


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
                const fetchedEvents = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { ...data, id: doc.id };
                });
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        };

        const fetchRegistrations = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'ai-event-reg'));
                const fetchedRegistrations = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { ...data, id: doc.id };
                });
                setRegistrations(fetchedRegistrations);
            } catch (error) {
                console.error('Error fetching registrations: ', error);
            }
        };

        fetchEvents();
        fetchRegistrations();
    }, []);

    const RegistrationCard = ({ registration, onApprove, onReject }) => (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{registration.name}</h3>
            <p className="text-gray-700 mb-1"><strong>Email:</strong> {registration.email}</p>
            <p className="text-gray-700 mb-1"><strong>Status:</strong> {registration.status}</p>
            <p className="text-gray-700 mb-1"><strong>Event Name:</strong> {registration.eventname}</p>
            {registration.status !== 'Approved' && registration.status !== 'Rejected' && (
                <div>
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mr-2"
                        onClick={() => onApprove(registration.id, registration.eventId)}
                        disabled={registration.status === 'Approved' || registration.status === 'Rejected'}
                    >
                        Approve
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                        onClick={() => onReject(registration.id, registration.eventId)}
                        disabled={registration.status === 'Approved' || registration.status === 'Rejected'}
                    >
                        Reject
                    </button>
                </div>
            )}
            {registration.status === 'Approved' && registration.remainingSlots <= 0 && (
                <p className="text-red-600">Slots Full</p>
            )}
            {registration.status === 'Rejected' && (
                <p className="text-red-600">Registration Rejected</p>
            )}
        </div>
    );

    
    const EventCard = ({ event, onRemove }) => (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
            <p className="text-gray-700 mb-1"><strong>Slots:</strong> {event.remainingSlots}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mr-2"
                    onClick={() => onRemove(event.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen">
            <div className="w-1/5 h-full">
                <AIAdminNavbar />
            </div>
            
            <div className="flex-1 p-8 bg-gray-100">
                <Header />
                
                <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">AI Event Registrations</h2>
                <div className="grid gap-6">
                <DropdownTable
                    registrations={registrations}
                    onApprove={handleApproveRegistration}
                    onReject={handleReject}
                />
                </div>
            </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
                    <div className="grid gap-6">
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} onRemove={handleRemoveEvent} />
                        ))}
                    </div>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
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
                            <label htmlFor="slots" className="block text-gray-700 mb-1">Slots:</label>
                            <input
                                type="text"
                                id="slots"
                                name="slots"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                value={formData.slots}
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
                            disabled={submitting}
                        >
                            {submitting ? 'Adding...' : 'Add Event'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );};

export default AdminAIEvents;
