import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const Blockchain = () => {
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
                            className="h-40 mt-20 bg-blue-500 rounded-md flex items-center justify-center"
                            onClick={() => console.log('Upcoming Events clicked')}
                        >
                            <span className="text-white text-2xl font-bold">Upcoming Events</span>
                        </button>
                        {/* Button B2 */}
                        <button
                            className="h-40 bg-green-500 rounded-md flex items-center justify-center"
                            onClick={() => console.log('Calendar clicked')}
                        >
                            <span className="text-white text-2xl font-bold">Calendar</span>
                        </button>
                        {/* Button B3 */}
                        <button
                            className="h-40 bg-red-500 rounded-md flex items-center justify-center"
                            onClick={() => console.log('E-certificates clicked')}
                        >
                            <span className="text-white text-2xl font-bold">E-Certificates</span>
                        </button>
                    </div>

                    {/* Section C (right section) */}
                    <div className="flex flex-col w-1/2 space-y-6 p-4">
                        {/* Button C1 */}
                        <button
                            className="h-40 mt-20 bg-purple-500 rounded-md flex items-center justify-center"
                            onClick={() => console.log('Workshop materials clicked')}
                        >
                            <span className="text-white text-2xl font-bold">Workshop materials</span>
                        </button>
                        {/* Button C2 */}
                        <button
                            className="h-40 bg-orange-500 rounded-md flex items-center justify-center"
                            onClick={() => console.log('Duty Leave clicked')}
                        >
                            <span className="text-white text-2xl font-bold">Duty Leave</span>
                        </button>
                        {/* Button C3 */}
                        <button
                            className="h-40 bg-yellow-500 rounded-md flex items-center justify-center"
                            onClick={() => console.log('Support clicked')}
                        >
                            <span className="text-white text-2xl font-bold">Support</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blockchain;
