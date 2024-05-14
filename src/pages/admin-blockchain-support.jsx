import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminBlockchainClubContactInfo = () => {
    // State to manage contact information
    const [contactInfo, setContactInfo] = useState({
        head: {
            email: 'head@blockchainclub.com',
            phone: '+1 (555) 123-4567',
        },
        secretary: {
            email: 'secretary@blockchainclub.com',
            phone: '+1 (555) 234-5678',
        },
        faculty: [
            {
                email: 'faculty1@blockchainclub.com',
                phone: '+1 (555) 345-6789',
            },
            {
                email: 'faculty2@blockchainclub.com',
                phone: '+1 (555) 456-7890',
            },
            {
                email: 'faculty3@blockchainclub.com',
                phone: '+1 (555) 567-8901',
            },
        ],
        members: [
            {
                email: 'member1@blockchainclub.com',
                phone: '+1 (555) 678-9012',
            },
            {
                email: 'member2@blockchainclub.com',
                phone: '+1 (555) 789-0123',
            },
            {
                email: 'member3@blockchainclub.com',
                phone: '+1 (555) 890-1234',
            },
            {
                email: 'member4@blockchainclub.com',
                phone: '+1 (555) 901-2345',
            },
        ],
    });

    // Function to handle form input changes
    const handleInputChange = (e, category, index) => {
        const { name, value } = e.target;
        setContactInfo((prevState) => {
            const updatedInfo = { ...prevState };
            if (category === 'head' || category === 'secretary') {
                updatedInfo[category][name] = value;
            } else {
                updatedInfo[category][index][name] = value;
            }
            return updatedInfo;
        });
    };

    // Function to add a new contact
    const handleAddContact = (category) => {
        setContactInfo((prevState) => {
            const updatedInfo = { ...prevState };
            const newContact = { email: '', phone: '' };
            updatedInfo[category].push(newContact);
            return updatedInfo;
        });
    };

    // Function to remove a contact
    const handleRemoveContact = (category, index) => {
        setContactInfo((prevState) => {
            const updatedInfo = { ...prevState };
            updatedInfo[category].splice(index, 1);
            return updatedInfo;
        });
    };

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full bg-gray-800 text-white">
                <AdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="mt-6">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Blockchain Club Contact Information</h2>

                    {/* Club Head */}
                    <div className="mb-8 border-black border-2 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Club Head</h3>
                        <form className="flex flex-col">
                            <label className="mb-4">
                                Email:
                                <input
                                    type="text"
                                    name="email"
                                    value={contactInfo.head.email}
                                    onChange={(e) => handleInputChange(e, 'head')}
                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                />
                            </label>
                            <label className="mb-4">
                                Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    value={contactInfo.head.phone}
                                    onChange={(e) => handleInputChange(e, 'head')}
                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                />
                            </label>
                        </form>
                    </div>

                    {/* Secretary */}
                    <div className="mb-8 border-black border-2 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Secretary</h3>
                        <form className="flex flex-col">
                            <label className="mb-4">
                                Email:
                                <input
                                    type="text"
                                    name="email"
                                    value={contactInfo.secretary.email}
                                    onChange={(e) => handleInputChange(e, 'secretary')}
                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                />
                            </label>
                            <label className="mb-4">
                                Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    value={contactInfo.secretary.phone}
                                    onChange={(e) => handleInputChange(e, 'secretary')}
                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                />
                            </label>
                        </form>
                    </div>

                    {/* Faculty Members */}
                    <div className="mb-8 border-black border-2 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Faculty Members</h3>
                        {contactInfo.faculty.map((faculty, index) => (
                            <div key={index} className="mb-4">
                                <form className="flex flex-col">
                                    <label className="mb-4">
                                        Email:
                                        <input
                                            type="text"
                                            name="email"
                                            value={faculty.email}
                                            onChange={(e) => handleInputChange(e, 'faculty', index)}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                    <label className="mb-4">
                                        Phone:
                                        <input
                                            type="text"
                                            name="phone"
                                            value={faculty.phone}
                                            onChange={(e) => handleInputChange(e, 'faculty', index)}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                </form>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                    onClick={() => handleRemoveContact('faculty', index)}
                                >
                                    Remove Faculty Member
                                </button>
                            </div>
                        ))}
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600"
                            onClick={() => handleAddContact('faculty')}
                        >
                            Add Faculty Member
                        </button>
                    </div>

                    {/* Other Members */}
                    <div className="border-black border-2 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Other Members</h3>
                        {contactInfo.members.map((member, index) => (
                            <div key={index} className="mb-4">
                                <form className="flex flex-col">
                                    <label className="mb-4">
                                        Email:
                                        <input
                                            type="text"
                                            name="email"
                                            value={member.email}
                                            onChange={(e) => handleInputChange(e, 'members', index)}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                    <label className="mb-4">
                                        Phone:
                                        <input
                                            type="text"
                                            name="phone"
                                            value={member.phone}
                                            onChange={(e) => handleInputChange(e, 'members', index)}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                </form>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                    onClick={() => handleRemoveContact('members', index)}
                                >
                                    Remove Member
                                </button>
                            </div>
                        ))}
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600"
                            onClick={() => handleAddContact('members')}
                        >
                            Add Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBlockchainClubContactInfo;
