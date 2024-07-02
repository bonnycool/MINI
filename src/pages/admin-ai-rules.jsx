import React, { useState, useEffect } from 'react';
import { db } from '../../backend/firebase'; // Import the Firebase configuration
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'; // Import Firestore functions
import AIAdminNavbar from '../Components/ai-admin-navbar';
import Header from '../Components/header';

const AdminAIClubRules = () => {
    const [supportItems, setSupportItems] = useState([]);
    const [formData, setFormData] = useState({
        rule: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'airules'), formData);
            console.log('Document written with ID: ', docRef.id);

            setSupportItems((prevItems) => [...prevItems, { ...formData, id: docRef.id }]);
            setFormData({
                rule: '',
                description: '',
            });

            alert('Rule added successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error adding Rule. Please try again later.');
        }
    };

    const handleRemoveSupportItem = async (itemId) => {
        console.log('Attempting to remove rule with ID:', itemId);
        try {
            const itemDocRef = doc(db, 'airules', itemId);
            console.log('Document reference:', itemDocRef);
            await deleteDoc(itemDocRef);
            setSupportItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
            alert('Rule removed successfully!');
        } catch (error) {
            console.error('Error removing rule: ', error);
            alert('Error removing rule. Please try again later.');
        }
    };

    useEffect(() => {
        const fetchSupportItems = async () => {
            try {
                const supportItemsCollection = collection(db, 'airules');
                const supportItemsSnapshot = await getDocs(supportItemsCollection);
                const supportItemsData = supportItemsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                console.log('Fetched rules:', supportItemsData);
                setSupportItems(supportItemsData);
            } catch (error) {
                console.error('Error fetching rules: ', error);
            }
        };

        fetchSupportItems();
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-full md:w-1/5 h-full bg-gray-800 text-white">
                <AIAdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="mt-6">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">AI Club Rules and Regulations</h2>

                    {/* Rules List */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {supportItems.map((item) => (
                            <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">{item.rule}</h3>
                                <p className="text-gray-600 mb-4"><strong>Description:</strong> {item.description}</p>
                                <div>
                                    <button
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mr-2"
                                        onClick={() => handleRemoveSupportItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add New Rule Form */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Add New Rule</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="rule" className="block text-gray-700 mb-1">Rule:</label>
                                <input
                                    type="text"
                                    id="rule"
                                    name="rule"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={formData.rule}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 mb-1">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Add Rule
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAIClubRules;
