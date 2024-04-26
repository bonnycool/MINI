import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const CybersecurityClubContact = () => {
    // Contact information
    const contactInfo = {
        head: {
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            phone: '123-456-7890',
        },
        secretary: {
            name: 'John Smith',
            email: 'johnsmith@example.com',
            phone: '987-654-3210',
        },
        faculty: [
            {
                name: 'Dr. Alice Johnson',
                email: 'alicejohnson@example.com',
                phone: '111-222-3333',
            },
            {
                name: 'Dr. Bob Williams',
                email: 'bobwilliams@example.com',
                phone: '444-555-6666',
            },
            {
                name: 'Dr. Carol Davis',
                email: 'caroldavis@example.com',
                phone: '777-888-9999',
            },
        ],
        members: [
            {
                name: 'Member 1',
                email: 'member1@example.com',
                phone: '222-333-4444',
            },
            {
                name: 'Member 2',
                email: 'member2@example.com',
                phone: '333-444-5555',
            },
            {
                name: 'Member 3',
                email: 'member3@example.com',
                phone: '666-777-8888',
            },
            {
                name: 'Member 4',
                email: 'member4@example.com',
                phone: '999-000-1111',
            },
        ],
    };

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Cybersecurity Club Contacts</h2>

                    {/* Club head */}
                    <h3 className="text-xl font-bold mb-2">Club Head</h3>
                    <p>Name: {contactInfo.head.name}</p>
                    <p>Email: {contactInfo.head.email}</p>
                    <p>Phone: {contactInfo.head.phone}</p>

                    {/* Secretary */}
                    <h3 className="text-xl font-bold mt-6 mb-2">Secretary</h3>
                    <p>Name: {contactInfo.secretary.name}</p>
                    <p>Email: {contactInfo.secretary.email}</p>
                    <p>Phone: {contactInfo.secretary.phone}</p>

                    {/* Faculty members */}
                    <h3 className="text-xl font-bold mt-6 mb-2">Faculty Members</h3>
                    {contactInfo.faculty.map((faculty, index) => (
                        <div key={index} className="mb-2">
                            <p>Name: {faculty.name}</p>
                            <p>Email: {faculty.email}</p>
                            <p>Phone: {faculty.phone}</p>
                        </div>
                    ))}

                    {/* Other members */}
                    <h3 className="text-xl font-bold mt-6 mb-2">Other Members</h3>
                    {contactInfo.members.map((member, index) => (
                        <div key={index} className="mb-2">
                            <p>Name: {member.name}</p>
                            <p>Email: {member.email}</p>
                            <p>Phone: {member.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CybersecurityClubContact;
