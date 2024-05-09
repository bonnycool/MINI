import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Header from '../Components/header';
import Box1Image from '../Assests/imagesroni/ai1.jpg';
import Box2Image from '../Assests/imagesroni/dl3.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/certificate 3.jpg';
import Box5Image from '../Assests/imagesroni/ai2.jpg';
import Box6Image from '../Assests/imagesroni/computer2.jpg';

const AI = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            <div className="flex-1 h-full">
                <Header />

                <div className="flex h-full">
                    <div className="flex flex-col w-1/2 space-y-6 p-4">
                        <button
                            className="h-48 mt-20 bg-blue-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:bg-blue-600"
                            style={{ backgroundImage: `url(${Box3Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/ai-events')}
                        >
                            Upcoming Events
                        </button>
                        <button
                            className="h-48 bg-green-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:bg-green-600"
                            style={{ backgroundImage: `url(${Box4Image})`, backgroundPosition: 'center' }}
                            onClick={() => console.log('E-Certificate')}
                        >
                            E-Certificate
                        </button>
                        <button
                            className="h-48 bg-red-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:bg-red-600"
                            style={{ backgroundImage: `url(${Box1Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/ai-rules')}
                        >
                            Rules and Regulations
                        </button>
                    </div>

                    <div className="flex flex-col w-1/2 space-y-6 p-4">
                        <button
                            className="h-48 mt-20 bg-purple-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:bg-purple-600"
                            style={{ backgroundImage: `url(${Box5Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate ('/ai-club-materials')}
                        >
                            Club Materials
                        </button>
                        <button
                            className="h-48 bg-orange-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:bg-orange-600"
                            style={{ backgroundImage: `url(${Box2Image})`, backgroundPosition: 'center' }}
                            onClick={() => console.log('Duty Leave clicked')}
                        >
                            Duty Leave
                        </button>
                        <button
                            className="h-48 bg-yellow-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:bg-yellow-600"
                            style={{ backgroundImage: `url(${Box6Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/ai-support')}
                        >
                            Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AI;
