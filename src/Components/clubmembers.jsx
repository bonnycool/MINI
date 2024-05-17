// ClubMembers.jsx

import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the navbar component
import Header from '../Components/header'; // Import the header component
import { db } from '../../backend/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

const ClubMembers = () => {
    const [currentClub, setCurrentClub] = useState('AI');
    const [members, setMembers] = useState([]);
    const [pendingMembers, setPendingMembers] = useState([]);
    const [showPending, setShowPending] = useState(false);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                let collectionName = '';
                switch (currentClub.toLowerCase()) {
                    case 'ai':
                        collectionName = 'ai-members';
                        break;
                    case 'blockchain':
                        collectionName = 'block-members';
                        break;
                    case 'cybersecurity':
                        collectionName = 'cyber-members';
                        break;
                    case 'opensource':
                        collectionName = 'open-members';
                        break;
                    default:
                        console.error('Unknown club name:', currentClub);
                        return;
                }

                const querySnapshot = await getDocs(collection(db, collectionName));
                const membersData = querySnapshot.docs.map(doc => doc.data());
                setMembers(membersData);

                // Fetch pending members
                const pendingCollectionName = `pending-${collectionName}`;
                const pendingQuerySnapshot = await getDocs(collection(db, pendingCollectionName));
                const pendingMembersData = pendingQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPendingMembers(pendingMembersData);

            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, [currentClub]);

    const approveMember = async (memberId) => {
        try {
            const collectionName = `${currentClub.toLowerCase()}-members`;
            const pendingCollectionName = `pending-${collectionName}`;

            const memberDoc = doc(db, pendingCollectionName, memberId);
            const memberData = (await getDoc(memberDoc)).data();

            // Add to approved members collection
            await updateDoc(doc(db, collectionName, memberId), memberData);

            // Remove from pending collection
            await deleteDoc(memberDoc);

            // Update state
            setMembers(prev => [...prev, memberData]);
            setPendingMembers(prev => prev.filter(member => member.id !== memberId));
        } catch (error) {
            console.error('Error approving member:', error);
        }
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

                    <div className="mb-4 mt-8">
                        <button
                            onClick={() => setShowPending(!showPending)}
                            className="bg-green-500 text-white rounded-md px-4 py-2"
                        >
                            {showPending ? 'Hide' : 'Show'} Pending Members
                        </button>
                    </div>

                    {showPending ? (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{currentClub} Pending Members</h3>
                            {pendingMembers.length > 0 ? (
                                <ul className="list-disc pl-5">
                                    {pendingMembers.map((member, index) => (
                                        <li key={index} className="mb-2 flex justify-between items-center">
                                            {member.name} {/* Adjust according to your data structure */}
                                            <button
                                                onClick={() => approveMember(member.id)}
                                                className="bg-blue-500 text-white rounded-md px-4 py-2"
                                            >
                                                Approve
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No pending members for this club.</p>
                            )}
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{currentClub} Club Members</h3>
                            {members.length > 0 ? (
                                <ul className="list-disc pl-5">
                                    {members.map((member, index) => (
                                        <li key={index} className="mb-2">
                                            {member.name} {/* Adjust according to your data structure */}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No members found for this club.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClubMembers;
