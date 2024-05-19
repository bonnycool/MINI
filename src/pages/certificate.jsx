import React, { useState, useEffect } from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader'; // Import the Header component
import { db } from '../../backend/firebase'; // Import the Firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import eCertificateImage from '../Assests/imagesroni/e-certificate.jpg'; // Import the e-certificate image

const Certificate = () => {
    const [supportItems, setSupportItems] = useState([]);
    const [certificateDetails, setCertificateDetails] = useState({
        name: 'Alan Roni', // Placeholder name
        event: 'Blockchain Workshop', // Placeholder event
        date: 'May 29, 2024', // Placeholder date
    });

    useEffect(() => {
        const fetchSupportItems = async () => {
            try {
                const supportItemsCollection = collection(db, 'certificates');
                const supportItemsSnapshot = await getDocs(supportItemsCollection);
                const supportItemsData = supportItemsSnapshot.docs.map(doc => ({
                    name: doc.data().name,
                    event: doc.data().event,
                    date: doc.data().date,
                    id: doc.id
                }));

                console.log('Fetched certificates:', supportItemsData);
                setSupportItems(supportItemsData);
            } catch (error) {
                console.error('Error fetching certificates: ', error);
            }
        };

        fetchSupportItems();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCertificateDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full bg-gray-800 text-white">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100 flex flex-col">
                {/* Add Header component at the top */}
                <UserHeader />

                {/* Content area for support items */}
                <div className="flex-1 mt-6 overflow-y-auto">
                    {/* Display support items */}
                    {supportItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-8 mb-4">
                            <h2 className="text-xl font-bold text-blue-600 mb-2">{item.event}</h2>
                            <p className="text-gray-600 mb-4"><strong>Name:</strong> {item.name}</p>
                            <p className="text-gray-600"><strong>Date:</strong> {item.date}</p>
                        </div>
                    ))}
                </div>

                {/* E-Certificate space */}
                <div className="flex justify-center items-center mt-6 relative">
                    <img src={eCertificateImage} alt="E-Certificate Template" className="max-w-full max-h-full" />
                    <div className="absolute" style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontFamily: 'Great Vibes, cursive' }}>
                        <h2 className="text-4xl font-bold mt-2">{certificateDetails.name}</h2>
                        <p className="text-2xl mt-4">has successfully participated in the</p>
                        <p className="text-3xl font-bold mt-2">{certificateDetails.event}</p>
                        <p className="text-2xl mt-4">held on</p>
                        <p className="text-3xl font-bold mt-2">{certificateDetails.date}</p>
                        <br></br>
                        <p className="text-2xl mt-4">We appreciate your dedication and hard work.</p>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default Certificate;
