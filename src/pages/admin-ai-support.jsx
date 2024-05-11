import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; 
import Header from '../Components/header'; 

const AdminAIClubContactInfo = () => {
    const [contactInfo, setContactInfo] = useState({
        head: {
            email: 'head@aiclub.com',
            phone: '+1 (555) 123-4567',
        },
        secretary: {
            email: 'secretary@aiclub.com',
            phone: '+1 (555) 234-5678',
        },
        faculty: [
            {
                email: 'faculty1@aiclub.com',
                phone: '+1 (555) 345-6789',
            },
        ],
        members: [
            {
                email: 'member1@aiclub.com',
                phone: '+1 (555) 678-9012',
            },
        ],
    });

    const handleInputChange = (e, category, index) => {
        const { name, value } = e.target;
        setContactInfo(prevState => {
            const updatedInfo = { ...prevState };
            if (category === 'head' || category === 'secretary') {
                updatedInfo[category][name] = value;
            } else {
                updatedInfo[category][index][name] = value;
            }
            return updatedInfo;
        });
    };

    const addContact = category => {
        setContactInfo(prevState => {
            const updatedInfo = { ...prevState };
            const newContact = { email: '', phone: '' };
            updatedInfo[category].push(newContact);
            return updatedInfo;
        });
    };

    const removeContact = (category, index) => {
        setContactInfo(prevState => {
            const updatedInfo = { ...prevState };
            updatedInfo[category].splice(index, 1);
            return updatedInfo;
        });
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/5 h-full bg-gray-800 text-white">
                <AdminNavbar />
            </div>

            <div className="flex-1 h-full p-8 bg-gray-100">
                <Header />
                <div className="mt-6">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">AI Club Contact Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="mb-8 border-black border-2 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-600 mb-2">Club Head</h3>
                                <form className="flex flex-col">
                                    <label className="mb-4">
                                        Email:
                                        <input
                                            type="text"
                                            name="email"
                                            value={contactInfo.head.email}
                                            onChange={e => handleInputChange(e, 'head')}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                    <label className="mb-4">
                                        Phone:
                                        <input
                                            type="text"
                                            name="phone"
                                            value={contactInfo.head.phone}
                                            onChange={e => handleInputChange(e, 'head')}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                </form>
                            </div>

                            <div className="mb-8 border-black border-2 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-blue-600 mb-2">Secretary</h3>
                                <form className="flex flex-col">
                                    <label className="mb-4">
                                        Email:
                                        <input
                                            type="text"
                                            name="email"
                                            value={contactInfo.secretary.email}
                                            onChange={e => handleInputChange(e, 'secretary')}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                    <label className="mb-4">
                                        Phone:
                                        <input
                                            type="text"
                                            name="phone"
                                            value={contactInfo.secretary.phone}
                                            onChange={e => handleInputChange(e, 'secretary')}
                                            className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                        />
                                    </label>
                                </form>
                            </div>
                        </div>

                        <div>
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
                                                    onChange={e => handleInputChange(e, 'faculty', index)}
                                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                                />
                                            </label>
                                            <label className="mb-4">
                                                Phone:
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={faculty.phone}
                                                    onChange={e => handleInputChange(e, 'faculty', index)}
                                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                                />
                                            </label>
                                        </form>
                                        <button
                                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                            onClick={() => removeContact('faculty', index)}
                                        >
                                            Remove Faculty Member
                                        </button>
                                    </div>
                                ))}
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600"
                                    onClick={() => addContact('faculty')}
                                >
                                    Add Faculty Member
                                </button>
                            </div>

                            <div className="mb-8 border-black border-2 rounded-lg p-6">
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
                                                    onChange={e => handleInputChange(e, 'members', index)}
                                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                                />
                                            </label>
                                            <label className="mb-4">
                                                Phone:
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={member.phone}
                                                    onChange={e => handleInputChange(e, 'members', index)}
                                                    className="block border-b border-gray-400 py-2 px-4 focus:outline-none"
                                                />
                                            </label>
                                        </form>
                                        <button
                                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                            onClick={() => removeContact('members', index)}
                                        >
                                            Remove Member
                                        </button>
                                    </div>
                                ))}
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600"
                                    onClick={() => addContact('members')}
                                >
                                    Add Member
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAIClubContactInfo;

