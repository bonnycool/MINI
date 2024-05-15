import React, { useState, useEffect } from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader'; // Import the Header component
import { db } from '../../backend/firebase'; // Import the Firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

const BlockchainClubRules = () => {
    const [supportItems, setSupportItems] = useState([]);

    useEffect(() => {
        const fetchSupportItems = async () => {
            try {
                const supportItemsCollection = collection(db, 'blockrules');
                const supportItemsSnapshot = await getDocs(supportItemsCollection);
                const supportItemsData = supportItemsSnapshot.docs.map(doc => ({ title: doc.data().title, description: doc.data().description, id: doc.id }));

                console.log('Fetched rules:', supportItemsData);
                setSupportItems(supportItemsData);
            } catch (error) {
                console.error('Error fetching rules: ', error);
            }
        };

        fetchSupportItems();
    }, []);

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full bg-gray-800 text-white">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100">
                {/* Add Header component at the top */}
                <UserHeader />

                {/* Content area */}
                <div className="mt-6">
                    {/* Display rules */}
                    {supportItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-8 mb-4">
                            <h2 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h2>
                            <p className="text-gray-600 mb-4"><strong>Description:</strong> {item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockchainClubRules;
