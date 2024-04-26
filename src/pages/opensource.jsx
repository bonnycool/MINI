import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component
import Box1Image from '../Assests/imagesroni/calendar5.jpg';
import Box2Image from '../Assests/imagesroni/dl.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/certificate 3.jpg';

const Opensource = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            {/* Main content area */}
            <div className="flex-1 h-full">
                {/* Add Header component at the top */}
                <Header />

                {/* Sections B and C container */}
                <div className="flex h-full">
                    {/* Section B (middle section) */}
                    <div className="flex flex-col w-1/2 space-y-6 p-4">
                        {/* Button B1 */}
                        <button
                            className="h-40 mt-20 bg-blue-500 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300"
                            style={{ backgroundImage: `url(${Box3Image})` }}
                            onClick={() => navigate('/opensource-events')} // Navigate to /ai-events
                        >
                            <span className="text-white text-2xl font-bold">Upcoming Events</span>
                        </button>
                        {/* Button B2 */}
                        <button
                            className="h-40 bg-green-500 rounded-md flex items-center justify-center hover:bg-green-600 transition duration-300"
                            style={{ backgroundImage: `url(${Box1Image})` }}
                            onClick={() => console.log('E-Certificate clicked')}
                        >
                            <span className="text-white text-2xl font-bold">E-Certificate</span>
                        </button>
                        {/* Button B3 */}
                        <button
                            className="h-40 bg-red-500 rounded-md flex items-center justify-center hover:bg-red-600 transition duration-300"
                            style={{ backgroundImage: `url(${Box4Image})` }}
                            onClick={() => navigate ('/opensource-rules')} >
                            <span className="text-white text-2xl font-bold">Rules and Regulations</span>
                        </button>
                    </div>

                    {/* Section C (right section) */}
                    <div className="flex flex-col w-1/2 space-y-6 p-4">
                        {/* Button C1 */}
                        <button
                            className="h-40 mt-20 bg-purple-500 rounded-md flex items-center justify-center hover:bg-purple-600 transition duration-300"
                            onClick={() => navigate ('/opensource-club-materials')}
                        >
                            <span className="text-white text-2xl font-bold">Club Materials</span>
                        </button>
                        {/* Button C2 */}
                        <button
                            className="h-40 bg-orange-500 rounded-md flex items-center justify-center hover:bg-orange-600 transition duration-300"
                            style={{ backgroundImage: `url(${Box2Image})` }}
                            onClick={() => console.log('Duty Leave clicked')}
                        >
                            <span className="text-white text-2xl font-bold">Duty Leave</span>
                        </button>
                        {/* Button C3 */}
                        <button
                            className="h-40 bg-yellow-500 rounded-md flex items-center justify-center hover:bg-yellow-600 transition duration-300"
                            onClick={() => navigate('/opensource-support')}
                        >
                            <span className="text-white text-2xl font-bold">Support</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opensource;
