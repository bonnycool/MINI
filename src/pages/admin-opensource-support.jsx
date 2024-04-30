import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminOpenSourceClubContact = () => {
    // State to manage contact information
    const [contactInfo, setContactInfo] = useState({
        head: {
            name: 'Alice Smith',
            email: 'alicesmith@example.com',
            phone: '123-456-7890',
        },
        secretary: {
            name: 'Michael Brown',
            email: 'michaelbrown@example.com',
            phone: '987-654-3210',
        },
        faculty: [
            {
                name: 'Dr. Emma Johnson',
                email: 'emmajohnson@example.com',
                phone: '111-222-3333',
            },
            {
                name: 'Dr. Jacob Wilson',
                email: 'jacobwilson@example.com',
                phone: '444-555-6666',
            },
            {
                name: 'Dr. Olivia Garcia',
                email: 'oliviagarcia@example.com',
                phone: '777-888-9999',
            },
        ],
        members: [
            {
                name: 'Member A',
                email: 'membera@example.com',
                phone: '222-333-4444',
            },
            {
                name: 'Member B',
                email: 'memberb@example.com',
                phone: '333-444-5555',
            },
            {
                name: 'Member C',
                email: 'memberc@example.com',
                phone: '666-777-8888',
            },
            {
                name: 'Member D',
                email: 'memberd@example.com',
                phone: '999-000-1111',
            },
        ],
    });

    // Function to handle form inputs
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
            const newContact = { name: '', email: '', phone: '' };
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
            <div className="w-1/5 h-full">
                <AdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Source Club Contacts</h2>

                    {/* Club Head */}
                    <h3 className="text-xl font-bold mb-2">Club Head</h3>
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={contactInfo.head.name}
                                onChange={(e) => handleInputChange(e, 'head')}
                                className="block mb-2 border p-1 rounded"
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={contactInfo.head.email}
                                onChange={(e) => handleInputChange(e, 'head')}
                                className="block mb-2 border p-1 rounded"
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={contactInfo.head.phone}
                                onChange={(e) => handleInputChange(e, 'head')}
                                className="block mb-2 border p-1 rounded"
                            />
                        </label>
                    </form>

                    {/* Secretary */}
                    <h3 className="text-xl font-bold mt-6 mb-2">Secretary</h3>
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={contactInfo.secretary.name}
                                onChange={(e) => handleInputChange(e, 'secretary')}
                                className="block mb-2 border p-1 rounded"
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={contactInfo.secretary.email}
                                onChange={(e) => handleInputChange(e, 'secretary')}
                                className="block mb-2 border p-1 rounded"
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={contactInfo.secretary.phone}
                                onChange={(e) => handleInputChange(e, 'secretary')}
                                className="block mb-2 border p-1 rounded"
                            />
                        </label>
                    </form>

                    {/* Faculty members */}
                    <h3 className="text-xl font-bold mt-6 mb-2">Faculty Members</h3>
                    {contactInfo.faculty.map((faculty, index) => (
                        <div key={index} className="mb-4">
                            <form>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={faculty.name}
                                        onChange={(e) => handleInputChange(e, 'faculty', index)}
                                        className="block mb-2 border p-1 rounded"
                                    />
                                </label>
                                <label>
                                    Email:
                                    <input
                                        type="text"
                                        name="email"
                                        value={faculty.email}
                                        onChange={(e) => handleInputChange(e, 'faculty', index)}
                                        className="block mb-2 border p-1 rounded"
                                    />
                                </label>
                                <label>
                                    Phone:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={faculty.phone}
                                        onChange={(e) => handleInputChange(e, 'faculty', index)}
                                        className="block mb-2 border p-1 rounded"
                                    />
                                </label>
                            </form>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                onClick={() => handleRemoveContact('faculty', index)}
                            >
                                Remove Faculty Member
                            </button>
                        </div>
                    ))}
                    <button
                        className="bg-green-500 text-white py-1 px-2 rounded mt-2 hover:bg-green-600"
                        onClick={() => handleAddContact('faculty')}
                    >
                        Add Faculty Member
                    </button>

                    {/* Other members */}
                    <h3 className="text-xl font-bold mt-6 mb-2">Other Members</h3>
                    {contactInfo.members.map((member, index) => (
                        <div key={index} className="mb-4">
                            <form>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={member.name}
                                        onChange={(e) => handleInputChange(e, 'members', index)}
                                        className="block mb-2 border p-1 rounded"
                                    />
                                </label>
                                <label>
                                    Email:
                                    <input
                                        type="text"
                                        name="email"
                                        value={member.email}
                                        onChange={(e) => handleInputChange(e, 'members', index)}
                                        className="block mb-2 border p-1 rounded"
                                    />
                                </label>
                                <label>
                                    Phone:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={member.phone}
                                        onChange={(e) => handleInputChange(e, 'members', index)}
                                        className="block mb-2 border p-1 rounded"
                                    />
                                </label>
                            </form>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                onClick={() => handleRemoveContact('members', index)}
                            >
                                Remove Member
                            </button>
                        </div>
                    ))}
                    <button
                        className="bg-green-500 text-white py-1 px-2 rounded mt-2 hover:bg-green-600"
                        onClick={() => handleAddContact('members')}
                    >
                        Add Member
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminOpenSourceClubContact;