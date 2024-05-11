import React from 'react';
import Navbar from '../Components/navbar';
import Header from '../Components/header';

const CyberClubMaterials = () => {
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
            ],
        },
        {
            title: 'Cybersecurity Lecture',
            references: [
                {
                    title: 'Link 1',
                    link: 'https://example.com/link1',
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-1 bg-gray-100">
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-8">Cyber Club Materials</h1>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
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
        </div>
    );
};

export default CyberClubMaterials;
