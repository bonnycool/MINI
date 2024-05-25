import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase"; // Adjust the path to your Firebase configuration
import { getDoc, doc } from 'firebase/firestore';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader'; // Import the Header component

const CyberClubMaterials = () => {
    const [material, setMaterial] = useState(null);
    const [loading, setLoading] = useState(true);
    const documentId = 'nfw3MNQ0AizktsNzTyXw'; // Use your actual document ID

    useEffect(() => {
        const fetchMaterial = async () => {
            try {
                console.log('Fetching material from Firestore...');
                const docRef = doc(db, 'blockchainclubmaterials', documentId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log('Fetched document data:', data);
                    setMaterial({ ...data, id: docSnap.id });
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching material:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMaterial();
    }, [documentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!material) {
        return <div>No material found.</div>;
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-full md:w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 mt-10 md:mt-0 bg-gray-100">
                {/* Header component */}
                <UserHeader />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        {/* Event title */}
                        <h3 className="text-xl font-bold text-blue-600 mb-2">{material.title}</h3>

                        {/* Session name */}
                        <p className="text-gray-700 mb-1"><strong>Session:</strong> {material.session}</p>

                        {/* Event date */}
                        <p className="text-gray-700 mb-1"><strong>Date:</strong> {new Date(material.date).toLocaleDateString()}</p>

                        {/* References and links */}
                        <ul className="space-y-2">
                            {material.references && material.references.map((reference, index) => (
                                <li key={index}>
                                    <a href={`https://${reference}`} className="text-blue-500 hover:underline">
                                        {reference}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberClubMaterials;
