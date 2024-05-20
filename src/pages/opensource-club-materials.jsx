import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import UserHeader from '../Components/userheader';

const OpensourceClubMaterials = () => {
    // Sample events data with references and links
    const events = [
        {
            title: 'Blockchain Workshop',
            references: [
                {
                    title: 'Reference 1',
                    link: 'https://example.com/reference1',
                },
                {
                    title: 'Reference 2',
                    link: 'https://example.com/reference2',
                },
                // Add more references as needed
            ],
        },
        {
            title: 'AI Symposium',
            references: [
                {
                    title: 'Reference A',
                    link: 'https://example.com/referenceA',
                },
                {
                    title: 'Reference B',
                    link: 'https://example.com/referenceB',
                },
                // Add more references as needed
            ],
        },
        {
            title: 'Opensource Seminar',
            references: [
                {
                    title: 'Resource 1',
                    link: 'https://example.com/resource1',
                },
                {
                    title: 'Resource 2',
                    link: 'https://example.com/resource2',
                },
                // Add more references as needed
            ],
        },
        {
            title: 'Cybersecurity Lecture',
            references: [
                {
                    title: 'Link 1',
                    link: 'https://example.com/link1',
                },
                // Add more references as needed
            ],
        },
    ];

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 mt-10 bg-gray-100">
                {/* Header component */}
                <UserHeader />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-6">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            {/* Event title */}
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>

                            {/* References and links */}
                            <ul className="space-y-2">
                                {event.references.map((reference, i) => (
                                    <li key={i}>
                                        <a href={reference.link} className="text-blue-500 hover:underline">
                                            {reference.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpensourceClubMaterials;
