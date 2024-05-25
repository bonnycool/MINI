import React, { useEffect, useState } from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import UserHeader from '../Components/userheader';
import { FaEnvelope } from 'react-icons/fa'; // Import the envelope icon from react-icons library

const Contact = () => {
    const contacts = [
        { role: 'HOD - Head of Department', email: 'arun@example.com' },
        { role: 'Blockchain Faculty', email: 'blockchain@example.com' },
        { role: 'Cybersecurity Faculty', email: 'cybersecurity@example.com' },
        { role: 'Opensource Faculty', email: 'opensource@example.com' },
        { role: 'AI Club Faculty', email: 'ai@example.com' },
        { role: 'Blockchain Student Head', email: 'blockchain_student@example.com' },
        { role: 'Cybersecurity Student Head', email: 'cybersecurity_student@example.com' },
        { role: 'Opensource Student Head', email: 'opensource_student@example.com' },
        { role: 'AI Student Head', email: 'ai_student@example.com' },
    ];

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Homenavbar />
            <div className="flex-1 bg-gray-100">
                {/* Header */}
                <UserHeader />

                {/* Contact section */}
=======
                <div className="container mx-auto px-10 py-10" style={{ marginLeft: '20%' }}>

                    <h1 className="text-4xl font-bold text-gray-800 mb-8"></h1>

                    {/* Contact cards */}
                    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-5/6 gap-8 justify-center ${loaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
                        {contacts.map((contact, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-300">
                                <h2 className="text-xl font-semibold mb-4">{contact.role}</h2>
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
