import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the navbar component
import Header from '../Components/header'; // Import the header component
import { db } from '../../backend/firebase';
import { collection, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';

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

                // Fetch members from the selected club's collection
                const querySnapshot = await getDocs(collection(db, collectionName));
                const membersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMembers(membersData);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, [currentClub]);

    useEffect(() => {
        const fetchPendingMembers = async () => {
            try {
                if (showPending) {
                    let approveCollection = '';
                    switch (currentClub.toLowerCase()) {
                        case 'ai':
                            approveCollection = 'approve';
                            break;
                        case 'blockchain':
                            approveCollection = 'block-approve';
                            break;
                        case 'cybersecurity':
                            approveCollection = 'cyber-approve';
                            break;
                        case 'opensource':
                            approveCollection = 'open-approve';
                            break;
                        default:
                            console.error('Unknown club name:', currentClub);
                            return;
                    }

                    const pendingQuerySnapshot = await getDocs(collection(db, approveCollection));
                    const pendingMembersData = await Promise.all(
                        pendingQuerySnapshot.docs.map(async (doc) => {
                            const isApproved = await checkIfApproved(doc.id);
                            return {
                                userId: doc.id,
                                name: doc.data().name,
                                email: doc.data().email,
                                phone_number: doc.data().phone_number,
                                isApproved,
                            };
                        })
                    );
                    setPendingMembers(pendingMembersData);
                }
            } catch (error) {
                console.error('Error fetching pending members:', error);
            }
        };

        const checkIfApproved = async (userId) => {
            const approvedCollectionName = `${currentClub.toLowerCase()}-members`;
            const docRef = doc(db, approvedCollectionName, userId);
            const docSnapshot = await getDoc(docRef);
            return docSnapshot.exists();
        };

        fetchPendingMembers();
    }, [showPending, currentClub]);

    const approveMember = async (userId, memberData) => {
        try {
            const collectionName = `${currentClub.toLowerCase()}-members`;
            const pendingCollectionName = `${currentClub.toLowerCase()}-approve`;

            // Add to approved members collection
            const newMemberRef = doc(db, collectionName, userId); // Assuming userId is used as document ID
            await setDoc(newMemberRef, memberData);

            // Remove from pending collection
            const memberDoc = doc(db, pendingCollectionName, userId); // Assuming userId is used as document ID
            await deleteDoc(memberDoc);

            // Update state
            setMembers(prev => [...prev, memberData]);
            setPendingMembers(prev => prev.map(member => 
                member.userId === userId ? { ...member, isApproved: true } : member
            ));
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
                                            <div>
                                                <p className="font-bold">{member.name}</p>
                                                <p>Email: {member.email}</p>
                                                <p>Phone: {member.phone_number}</p>
                                            </div>
                                            {member.isApproved ? (
                                                <span className="text-green-500 font-bold">Approved</span>
                                            ) : (
                                                <button
                                                    onClick={() => approveMember(member.userId, {
                                                        name: member.name,
                                                        email: member.email,
                                                        phone_number: member.phone_number,
                                                    })}
                                                    className="bg-blue-500 text-white rounded-md px-4 py-2"
                                                >
                                                    Approve
                                                </button>
                                            )}
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
                                            {member.name}
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
