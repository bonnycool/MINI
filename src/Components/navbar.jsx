import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, doc, addDoc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import firebaseConfig from '../../backend/firebaseConfig';
import { db } from '../../backend/firebase';

const auth = getAuth();
const firestore = getFirestore();

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasJoinedClub, setHasJoinedClub] = useState(false); // State to track if user has joined a club
    const navigate = useNavigate();

    useEffect(() => {
        checkIfUserJoinedClub(); // Check if user has already joined a club on component mount
    }, []);

    const handleJoinClick = () => {
        setIsModalOpen(true);
    };

    const handleClubSelect = async (club) => {
        setIsModalOpen(false);

        try {
            const user = auth.currentUser;
            if (!user) {
                console.log('User not authenticated');
                return;
            }

            const userId = user.uid;

            // Check if the user has already joined a club
            if (hasJoinedClub) {
                alert('You have already joined a club. You cannot join another club.');
                return;
            }

            // Fetch user profile data from Firestore
            const profileRef = doc(firestore, 'userprofiles', userId);
            const profileSnap = await getDoc(profileRef);

            if (profileSnap.exists()) {
                const userData = profileSnap.data();

                // Determine which collection to add the document to based on club selection
                let approveCollection;
                switch (club) {
                    case 'AI Club':
                        approveCollection = 'approve';
                        break;
                    case 'Block Club':
                        approveCollection = 'block-approve';
                        break;
                    case 'Open Club':
                        approveCollection = 'open-approve';
                        break;
                    case 'Cyber Club':
                        approveCollection = 'cyber-approve';
                        break;
                    default:
                        console.log('Invalid club selection');
                        return;
                }

                // Check if user has already joined a club
                const userClubsRef = doc(firestore, 'userclubs', userId);
                const userClubsSnap = await getDoc(userClubsRef);

                if (userClubsSnap.exists()) {
                    const userData = userClubsSnap.data();
                    if (userData.joinedClub) {
                        setHasJoinedClub(true);
                        return;
                    }
                }

                // Store user profile in the appropriate club approval collection
                const clubRef = collection(firestore, approveCollection);
                await addDoc(clubRef, {
                    userId: userId,
                    ...userData,
                    club: club,
                    timestamp: new Date()
                });

                // Update userclubs collection to mark user as joined the club
                await setDoc(userClubsRef, {
                    joinedClub: club,
                });

                alert(`Request to join ${club} sent successfully!`);

                // Update state to indicate that the user has joined a club
                setHasJoinedClub(true);
            } else {
                console.log('User profile does not exist in Firestore');
            }
        } catch (error) {
            console.error('Error handling club selection:', error);
            alert('Failed to send request. Please try again.');
        }
    };

    // Function to check if the user has already joined a club
    const checkIfUserJoinedClub = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.log('User not authenticated');
                return;
            }

            const userId = user.uid;

            // Check userclubs collection to see if user has joined any club
            const userClubsRef = doc(firestore, 'userclubs', userId);
            const userClubsSnap = await getDoc(userClubsRef);

            if (userClubsSnap.exists()) {
                const userData = userClubsSnap.data();
                if (userData.joinedClub) {
                    setHasJoinedClub(true);
                }
            }
        } catch (error) {
            console.error('Error checking user club status:', error);
        }
    };

    return (
        <div>
            <div className={`fixed top-0 left-0 h-full w-1/5 bg-gray-900 text-white p-4 z-50 md:block`}>
                {/* Branding/logo */}
                <div className="flex items-center mb-14">
                    <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                    <span className="text-xl font-bold">GITSCONNECT</span>
                </div>
                
                {/* Navigation links */}
                <ul className="space-y-4">
                    <li>
                        <a href="home" className="block p-2 hover:bg-blue-800 rounded">Home</a>
                    </li>
                    <li>
                        <a href="/club-calendar" className="block p-2 hover:bg-blue-800 rounded">Calendar</a>
                    </li>
                    <li>
                        <a href="/duty-leave" className="block p-2 hover:bg-blue-800 rounded">Duty Leave</a>
                    </li>
                    <li>
                        <a href="/about" className="block p-2 hover:bg-blue-800 rounded">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="block p-2 hover:bg-blue-800 rounded">Contact</a>
                    </li>
                    <li>
                        <button onClick={handleJoinClick} className="block p-2 hover:bg-blue-800 rounded">Join</button>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Select a Club</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => handleClubSelect('AI Club')} className="block w-full text-left p-2 hover:bg-blue-200 rounded">AI Club</button>
                            </li>
                            <li>
                                <button onClick={() => handleClubSelect('Block Club')} className="block w-full text-left p-2 hover:bg-blue-200 rounded">Block Club</button>
                            </li>
                            <li>
                                <button onClick={() => handleClubSelect('Open Club')} className="block w-full text-left p-2 hover:bg-blue-200 rounded">Open Club</button>
                            </li>
                            <li>
                                <button onClick={() => handleClubSelect('Cyber Club')} className="block w-full text-left p-2 hover:bg-blue-200 rounded">Cyber Club</button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

