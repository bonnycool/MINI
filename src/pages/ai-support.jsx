import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AIClubContactInfo = () => {
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Club Contact Information</h2>
                    
                    {/* Club Head */}
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Club Head</h3>
                    <p>Email: head@aiclub.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    
                    {/* Secretary */}
                    <h3 className="text-xl font-bold text-blue-600 mb-2 mt-4">Secretary</h3>
                    <p>Email: secretary@aiclub.com</p>
                    <p>Phone: +1 (555) 234-5678</p>
                    
                    {/* Faculty Members */}
                    <h3 className="text-xl font-bold text-blue-600 mb-2 mt-4">Faculty Members</h3>
                    <p>Faculty Member 1:</p>
                    <p>Email: faculty1@aiclub.com</p>
                    <p>Phone: +1 (555) 345-6789</p>
                    
                    <p className="mt-2">Faculty Member 2:</p>
                    <p>Email: faculty2@aiclub.com</p>
                    <p>Phone: +1 (555) 456-7890</p>
                    
                    <p className="mt-2">Faculty Member 3:</p>
                    <p>Email: faculty3@aiclub.com</p>
                    <p>Phone: +1 (555) 567-8901</p>
                    
                    {/* Other Members */}
                    <h3 className="text-xl font-bold text-blue-600 mb-2 mt-4">Other Members</h3>
                    <p>Member 1:</p>
                    <p>Email: member1@aiclub.com</p>
                    <p>Phone: +1 (555) 678-9012</p>
                    
                    <p className="mt-2">Member 2:</p>
                    <p>Email: member2@aiclub.com</p>
                    <p>Phone: +1 (555) 789-0123</p>
                    
                    <p className="mt-2">Member 3:</p>
                    <p>Email: member3@aiclub.com</p>
                    <p>Phone: +1 (555) 890-1234</p>
                    
                    <p className="mt-2">Member 4:</p>
                    <p>Email: member4@aiclub.com</p>
                    <p>Phone: +1 (555) 901-2345</p>
                </div>
            </div>
        </div>
    );
};

export default AIClubContactInfo;
