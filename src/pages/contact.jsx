import React from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import Header from '../Components/header';
import { FaEnvelope } from 'react-icons/fa'; // Import the envelope icon from react-icons library

const Contact = () => {
    // Define an array of objects containing contact information for different roles
    const contacts = [
        { role: 'HOD - Head of Department', email: 'arun@example.com' },
        { role: 'Blockchain Faculty', email: 'blockchain@example.com' },
        { role: 'Cybersecurity Faculty', email: 'cybersecurity@example.com' },
        { role: 'Opensource Faculty', email: 'opensource@example.com' },
        { role: 'AI Club Faculty', email: 'ai@example.com' },
        { role: 'Blockchain Student Head', email: 'blockchain_student@example.com' },
        { role: 'Cybersecurity Student Head', email: 'cybersecurity_student@example.com' },
        { role: 'Opensource Student Head', email: 'opensource_student@example.com' },
    ];

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Homenavbar />

            {/* Main content */}
            <div className="flex-1 bg-gray-100">
                {/* Header */}
                <Header />

                {/* Contact section */}
                <div className="container mx-auto px-4 py-8 ml-20">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>

                    {/* Contact cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-lg">
                        {contacts.map((contact, index) => (
                            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-2">{contact.role}</h2>
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2 text-gray-600" />
                                    <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">{contact.email}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
