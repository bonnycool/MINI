import React from 'react';
import Header from '../Components/header'; // Import the Header component


const SuperAdmin = () => {
    return (
        <div className="flex h-screen">
            {/* Section A: Navigation Bar */}
            <div className="w-1/4 bg-gray-600 text-white p-4">
                {/* Add Header component */}
                <Header />
            </div>
            
            {/* Sections B and C container */}
            <div className="flex w-2/3">
                {/* Section B */}
                <div className="flex flex-col ml-20 justify-center w-1/2 p-4 space-y-6">
                    {/* Button B1 */}
                    <button
                        className="w-5/6 h-40 mt-14 rounded-md hover:opacity-80 mx-auto bg-cover bg-center text-white text-xl font-bold"
                        style={{ backgroundImage: 'url(src/Assests/imagesroni/dl1.jpg)' }}
                    >
                        Duty Leave Approval
                    </button>
                    {/* Button B2 */}
                    <button
                        className="w-5/6 h-40 rounded-md hover:opacity-80 mx-auto bg-cover bg-center text-white text-xl font-bold"
                        style={{ backgroundImage: 'url(src/Assests/imagesroni/bloackchain5.jpg)' }}
                    >
                        Blockchain Club
                    </button>
                    {/* Button B3 */}
                    <button
                        className="w-5/6 h-40 rounded-md hover:opacity-80 mx-auto bg-cover bg-center text-white text-xl font-bold"
                        style={{ backgroundImage: 'url(src/Assests/imagesroni/cyber2.jpg)' }}
                    >
                        Cyber Security Club
                    </button>
                </div>
                
                {/* Section C */}
                <div className="flex flex-col ml-10 justify-center w-1/2 p-4 space-y-6">
                    {/* Button C1 */}
                    <button
                        className="w-5/6 h-40 mt-14 rounded-md hover:opacity-80 mx-auto bg-cover bg-center text-white text-xl font-bold"
                        style={{ backgroundImage: 'url(src/Assests/imagesroni/calendar1.jpg)' }}
                    >
                        Recent Changes
                    </button>
                    {/* Button C2 */}
                    <button
                        className="w-5/6 h-40 rounded-md hover:opacity-80 mx-auto bg-cover bg-center text-white text-xl font-bold"
                        style={{ backgroundImage: 'url(src/Assests/imagesroni/opensource2.jpg)' }}
                    >
                        Open Source Club
                    </button>
                    {/* Button C3 */}
                    <button
                        className="w-5/6 h-40 rounded-md hover:opacity-80 mx-auto bg-cover bg-center text-white text-xl font-bold"
                        style={{ backgroundImage: 'url(src/Assests/imagesroni/ai2.jpg)' }}
                    >
                        AI Club
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuperAdmin;
