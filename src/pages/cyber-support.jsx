import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const CyberSecurityClubContact = () => {
    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full bg-gray-800 text-white">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="mt-6">
                    {/* Club Head */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-4">
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Club Head</h2>
                        <p>Email: head@blockchainclub.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                    
                    {/* Secretary */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Secretary</h2>
                        <p>Email: secretary@blockchainclub.com</p>
                        <p>Phone: +1 (555) 234-5678</p>
                    </div>
                    
                    {/* Faculty Members */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Faculty Members</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Faculty Member 1:</p>
                                <p>Email: faculty1@blockchainclub.com</p>
                                <p>Phone: +1 (555) 345-6789</p>
                            </div>
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Faculty Member 2:</p>
                                <p>Email: faculty2@blockchainclub.com</p>
                                <p>Phone: +1 (555) 456-7890</p>
                            </div>
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Faculty Member 3:</p>
                                <p>Email: faculty3@blockchainclub.com</p>
                                <p>Phone: +1 (555) 567-8901</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Other Members */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Other Members</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Member 1:</p>
                                <p>Email: member1@aiclub.com</p>
                                <p>Phone: +1 (555) 678-9012</p>
                            </div>
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Member 2:</p>
                                <p>Email: member2@aiclub.com</p>
                                <p>Phone: +1 (555) 789-0123</p>
                            </div>
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Member 3:</p>
                                <p>Email: member3@aiclub.com</p>
                                <p>Phone: +1 (555) 890-1234</p>
                            </div>
                            <div className="border border-gray-300 p-4 rounded-lg">
                                <p>Member 4:</p>
                                <p>Email: member4@aiclub.com</p>
                                <p>Phone: +1 (555) 901-2345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberSecurityClubContact;
