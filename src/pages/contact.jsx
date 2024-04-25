import React from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import Header from '../Components/header';

const Contact = () => {
    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5">
                <Homenavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8 mt-20">
                {/* Header component */}
                <Header />

                {/* Content area */}
                <div className="p-8">
                    {/* Head of Department */}
                    <h2 className="font-bold text-3xl mb-4">HOD - Head of Department</h2>
                    <p>Arun Madhu - email@example.com</p>

                    {/* Faculty */}
                    <h2 className="font-bold text-3xl mt-6 mb-4">Faculty</h2>
                    <p>Blockchain - </p>
                    <p>Cybersecurity - </p>
                    <p>Opensource - </p>
                    <p>AI Club - </p>

                    {/* Student Heads */}
                    <h2 className="font-bold text-3xl mt-6 mb-4">Student Heads</h2>
                    <p>Blockchain - </p>
                    <p>Cybersecurity - </p>
                    <p>Opensource - </p>
                    <p>AI Club - </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
