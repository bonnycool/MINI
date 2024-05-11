import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar';
import Header from '../Components/header';

const AdminBlockchainClubRules = () => {
    const [rules, setRules] = useState([
        {
            id: 1,
            title: 'Code of Conduct:',
            description: 'Members must maintain respect, professionalism, and inclusivity in all club activities.',
        },
        // Other rules...
    ]);

    const handleRuleChange = (id, field, value) => {
        const updatedRules = rules.map(rule => {
            if (rule.id === id) {
                return {
                    ...rule,
                    [field]: value,
                };
            }
            return rule;
        });
        setRules(updatedRules);
    };

    const addRule = () => {
        const newRule = {
            id: rules.length + 1,
            title: '',
            description: '',
        };
        setRules([...rules, newRule]);
    };

    const removeRule = id => {
        const updatedRules = rules.filter(rule => rule.id !== id);
        setRules(updatedRules);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/5 h-full">
                <AdminNavbar />
            </div>

            <div className="flex-1 h-full p-4 md:p-8 bg-gray-100">
                <Header />
                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Source Club Rules and Regulations</h2>

                    {rules.map(rule => (
                        <div key={rule.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                            <form>
                                <strong>
                                    <input
                                        type="text"
                                        value={rule.title}
                                        onChange={e => handleRuleChange(rule.id, 'title', e.target.value)}
                                        className="font-bold text-lg mb-2 border p-2 rounded w-full"
                                        placeholder="Enter Rule Title"
                                    />
                                </strong>
                                <textarea
                                    value={rule.description}
                                    onChange={e => handleRuleChange(rule.id, 'description', e.target.value)}
                                    className="block mb-2 border p-2 rounded w-full"
                                    rows="3"
                                    placeholder="Enter Rule Description"
                                />
                                <button
                                    type="button"
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                    onClick={() => removeRule(rule.id)}
                                >
                                    Remove
                                </button>
                            </form>
                        </div>
                    ))}

                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600"
                        onClick={addRule}
                    >
                        Add Rule
                    </button>

                    <p className="mt-6">
                        By joining the Blockchain Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminBlockchainClubRules;
