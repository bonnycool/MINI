import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase";
import { getDocs, collection, doc, setDoc, getDoc, query, where, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Navbar from '../Components/navbar';
import UserHeader from '../Components/userheader';

const CyberEvents = () => {
    const [events, setEvents] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const auth = getAuth();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'cyberevents'));
                const fetchedEvents = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { ...data, id: doc.id };
                });
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        };

        const fetchRegisteredEvents = async (uid) => {
            try {
                const q = query(collection(db, 'cybereventreg'), where('uid', '==', uid));
                const querySnapshot = await getDocs(q);
                const registered = querySnapshot.docs.map(doc => doc.data());
                setRegisteredEvents(registered);
            } catch (error) {
                console.error('Error fetching registered events: ', error);
            }
        };

        auth.onAuthStateChanged((user) => {
            if (user) {
                fetchRegisteredEvents(user.uid);
            }
        });

        fetchEvents();
    }, [auth]);

   const handleRegister = async (eventId) => {
    const user = auth.currentUser;

    if (user) {
        const { uid, email } = user;

        try {
            // Fetch event details from the events collection
            const eventDoc = await getDoc(doc(db, 'cyberevents', eventId));
            if (eventDoc.exists()) {
                const eventData = eventDoc.data();
                const { title: eventname } = eventData; // Assuming the event title is used as the event name

                // Get user details
                const userDoc = await getDoc(doc(db, 'userprofiles', uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const { name, semester, phone_number } = userData;
                    
                    const date = new Date().toLocaleDateString();
    

                    // Register user for the event
                    await setDoc(doc(db, 'cybereventreg', `${eventId}_${uid}`), {
                        eventId,
                        uid,
                        name,
                        email,
                        semester,
                        phone_number,
                        eventname, // Include event name in registration
                        date, // Store date as a string
                        status: 'Pending for Approval'
                    });

                    // Update registeredEvents state
                    setRegisteredEvents([...registeredEvents, { eventId, status: 'Pending for Approval' }]);
                    alert('Successfully registered for the event! Pending for approval.');
                } else {
                    alert('User details not found. Please complete your profile.');
                }
            } else {
                alert('Event details not found.');
            }
        } catch (error) {
            console.error('Error registering for event: ', error);
            alert('Failed to register for the event.');
        }
    } else {
        alert('You need to be logged in to register for an event.');
    }
};
const handleApproval = async (registrationId, eventId) => {
    try {
        const regDocRef = doc(db, 'cybereventreg', registrationId);
        await updateDoc(regDocRef, {
            status: 'Approved',
        });
        setRegisteredEvents((prevRegs) => prevRegs.map((reg) =>
            reg.id === registrationId ? { ...reg, status: 'Approved' } : reg
        ));

        const eventDocRef = doc(db, 'cyberevents', eventId);
        const eventDoc = await getDoc(eventDocRef);
        const eventData = eventDoc.data();

        if (eventData.remainingSlots > 0) {
            await updateDoc(eventDocRef, {
                remainingSlots: eventData.remainingSlots - 1,
            });
            setRegisteredEvents((prevEvents) => prevEvents.map((event) =>
                event.id === eventId ? { ...event, remainingSlots: event.remainingSlots - 1 } : event
            ));
        }

        alert('Registration approved successfully!');
    } catch (error) {
        console.error('Error approving registration: ', error);
        alert('Error approving registration. Please try again later.');
    }
};

    return (
        <div className="flex h-screen">
            <div className="w-1/5 h-full">
                <Navbar />
            </div>
            <div className="flex-1 p-10 bg-gray-100">
                <UserHeader />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
                <div className="grid gap-6">
                    {events.map((event) => (
                        
                        <div key={event.id} className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
                            <p className="text-gray-700 mb-1"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-1"><strong>Time:</strong> {event.time}</p>
                            <p className="text-gray-700 mb-1"><strong>Location:</strong> {event.location}</p>
                            <p className="text-gray-700 mb-1"><strong>Slots:</strong> {event.slots}</p>
                            <p className="text-gray-700 mb-1"><strong>Description:</strong> {event.description}</p>
                            <div className="flex justify-end">
                                {registeredEvents.find(registration => registration.eventId === event.id && registration.status === 'Approved') ? (
                                    <button className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-4" disabled>
                                        
                                        Approved
                                        
                                    </button>
                                ) : (
                                    <>
                                        {registeredEvents.find(registration => registration.eventId === event.id && registration.status === 'Pending for Approval') ? (
                                            <button className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-4" disabled>
                                                Pending for Approval
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600"
                                                onClick={() => handleRegister(event.id)}
                                            >
                                                Register
                                            </button>
                                        )}
                                        <a href="/club-calendar" className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                            Show in Calendar
                                        </a>
                                    </>
                                )}
                            </div>
                            {registeredEvents.find(registration => registration.eventId === event.id && registration.status === 'Rejected') && (
                                <p className="text-red-600">Slots Full</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CyberEvents;

