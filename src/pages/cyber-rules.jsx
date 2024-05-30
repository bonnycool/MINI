import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase"; // Adjust the path to your Firebase configuration
import { getDocs, collection } from 'firebase/firestore';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader'; // Import the Header component

const CyberClubRules = () => {
    const [supportItems, setSupportItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSupportItems = async () => {
            try {
                console.log('Fetching rules from Firestore...');
                const supportItemsCollection = collection(db, 'cyberrules');
                const supportItemsSnapshot = await getDocs(supportItemsCollection);
                const supportItemsData = supportItemsSnapshot.docs.map(doc => ({ title: doc.data().title, description: doc.data().description, id: doc.id }));
                console.log('Fetched rules:', supportItemsData);
                setSupportItems(supportItemsData);
            } catch (error) {
                console.error('Error fetching rules: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSupportItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-full md:w-1/5 h-full bg-gray-800 text-white">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-20 bg-gray-100">
                {/* Add Header component at the top */}
                <UserHeader />

                {/* Content area */}
                <div className="flex flex-col mt-6">
                    {/* Display rules */}
                    {supportItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md mb-4">
                            <h2 className="text-xl font-bold text-blue-600 mt-4 ml-4">{item.title}</h2>
                            <p className="text-gray-600 mt-2 ml-4 mr-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CyberClubRules;
