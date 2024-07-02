import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import CyberAdminNavbar from '../Components/cyber-admin-navbar';
import Header from '../Components/header'; // Import the Header component
import Box1Image from '../Assests/imagesroni/ai1.jpg';
import Box2Image from '../Assests/imagesroni/dl3.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/certificate 3.jpg';
import Box5Image from '../Assests/imagesroni/ai2.jpg';
import Box6Image from '../Assests/imagesroni/computer2.jpg';

const AdminCybersecurity = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/5 h-full">
                <CyberAdminNavbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 h-full bg-gray-100">
                <Header />

                {/* Boxes */}
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Side */}
                    <div className="flex flex-col md:w-1/2 p-4">
                        {/* Box 1 */}
                        <button
                            className="h-48 mt-20 bg-blue-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box3Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/admin-cyber-events')}
                        >
                            Upcoming Events
                        </button>

                        {/* Box 2 */}
                        <button
                            className="h-48 mt-6 bg-green-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box4Image})`, backgroundPosition: 'center' }}
                            onClick={() => console.log('E-Certificate')}
                        >
                            E-Certificate
                        </button>

                        {/* Box 3 */}
                        <button
                            className="h-48 mt-6 bg-red-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box1Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/admin-cyber-rules')}
                        >
                            Rules and Regulations
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col md:w-1/2 p-4">
                        {/* Box 4 */}
                        <button
                            className="h-48 mt-6 md:mt-20 bg-purple-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box5Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/admin-cyber-club-materials')}
                        >
                            Club Materials
                        </button>

                        {/* Box 5 */}
                        <button
                            className="h-48 mt-6 bg-orange-500 rounded-md flex items-center justify-center transition duration-300 text-black text-3xl font-bold px-8 hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box2Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/admin-cyber-duty-leave')}
                        >
                            Attendance
                        </button>

                        {/* Box 6 */}
                        <button
                            className="h-48 mt-6 bg-yellow-500 rounded-md flex items-center justify-center transition duration-300 text-white text-3xl font-bold px-8 hover:opacity-80 relative overflow-hidden shadow-lg"
                            style={{ backgroundImage: `url(${Box6Image})`, backgroundPosition: 'center' }}
                            onClick={() => navigate('/admin-cyber-support')}
                        >
                            Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCybersecurity;
