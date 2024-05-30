import React, { useState, useEffect } from 'react';
import { db } from "../../backend/firebase"; // Adjust the path to your Firebase configuration
import { getDocs, collection } from 'firebase/firestore';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader'; // Import the Header component

const AIClubMaterials = () => {
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                console.log('Fetching materials from Firestore...');
                const querySnapshot = await getDocs(collection(db, 'aiclubmaterials'));
                const fetchedMaterials = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    console.log('Fetched document data:', data);
                    return { ...data, id: doc.id };
                });
                console.log('Fetched materials:', fetchedMaterials);
                setMaterials(fetchedMaterials);
            } catch (error) {
                console.error('Error fetching materials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMaterials();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-full md:w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-4 md:p-8 bg-gray-100">
                {/* Header component */}
                <UserHeader />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-16 md:mt-20">  {/* Adjusted margin-top values */}
                    {materials.length > 0 ? (
                        materials.map((material) => (
                            <div key={material.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                                {/* Event title */}
                                <h3 className="text-xl font-bold text-blue-600 mb-6">{material.title}</h3>

                                {/* References and links */}
                                <ul className="space-y-2">
                                    {material.references && material.references.map((reference, index) => (
                                        <li key={index}>
                                            {typeof reference.link === 'string' ? (
                                                <a href={reference.link} className="text-blue-500 hover:underline">
                                                    {reference.title}
                                                </a>
                                            ) : (
                                                <span className="text-gray-500">{reference.title}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <div>No materials found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIClubMaterials;
