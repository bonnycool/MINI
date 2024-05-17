import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar';
import Header from '../Components/header';

const AdminAIClubRules = () => {
    const [rules, setRules] = useState([
        {
            id: 1,
            title: 'Code of Conduct:',
            description: 'Members must maintain respect, professionalism, and inclusivity in all club activities.',
        },
        {
            id: 2,
            title: 'Participation:',
            description: 'Active participation is encouraged in club activities, projects, and discussions.',
        },
        {
            id: 3,
            title: 'Collaboration:',
            description: 'Members should work collaboratively on open source projects and initiatives.',
        },
        {
            id: 4,
            title: 'Transparency:',
            description: 'Members must adhere to open source principles of transparency and open collaboration.',
        },
        {
            id: 5,
            title: 'Licensing:',
            description: 'Members must respect open source licenses and ensure proper use and attribution of open source code.',
        },
        {
            id: 6,
            title: 'Contribution Guidelines:',
            description: 'Members should follow contribution guidelines and best practices when contributing to open source projects.',
        },
        {
            id: 7,
            title: 'Community Engagement:',
            description: 'Members are encouraged to engage with the broader open source community and represent the club positively.',
        },
        {
            id: 8,
            title: 'Conflict Resolution:',
            description: 'Disputes should be resolved through respectful and constructive dialogue. Club leadership may mediate if necessary.',
        },
        {
            id: 9,
            title: 'Feedback:',
            description: 'Members are encouraged to provide feedback and suggestions to improve club activities and initiatives.',
        },
        {
            id: 10,
            title: 'Adherence to Club Policies:',
            description: 'Members must follow all club policies and procedures, including those related to project contributions, event planning, and communication.',
        },
    

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
        <div className="flex h-screen">
            <div className="w-1/5 h-full">
                <AdminNavbar />
            </div>

            <div className="flex-1 h-full p-8 bg-gray-100">
                <Header />
                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Source Club Rules and Regulations</h2>

                    {rules.map(rule => (
                        <div key={rule.id} className="bg-white p-6 rounded-lg shadow-md">
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
                        By joining the AI Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminAIClubRules;