import React, { useState } from 'react';
import AdminNavbar from '../Components/adminnavbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AdminBlockchainClubRules = () => {
    // Initialize state for managing the list of rules
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

    // Function to handle rule input changes
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

    // Function to add a new rule
    const addRule = () => {
        const newRule = {
            id: rules.length + 1,
            title: '',
            description: '',
        };
        setRules([...rules, newRule]);
    };

    // Function to remove a rule
    const removeRule = id => {
        const updatedRules = rules.filter(rule => rule.id !== id);
        setRules(updatedRules);
    };

    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <AdminNavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 bg-gray-100 w-4/5">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-6">
                    {/* Open Source Club Rules and Regulations */}
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Source Club Rules and Regulations</h2>

                    {/* List of rules */}
                    <ol className="list-decimal pl-5">
                        {rules.map(rule => (
                            <li key={rule.id} className="mb-4">
                                <form>
                                    <strong>
                                        <input
                                            type="text"
                                            value={rule.title}
                                            onChange={e => handleRuleChange(rule.id, 'title', e.target.value)}
                                            className="font-bold mb-2 border p-1 rounded"
                                        />
                                    </strong>
                                    <textarea
                                        value={rule.description}
                                        onChange={e => handleRuleChange(rule.id, 'description', e.target.value)}
                                        className="block mb-2 border p-1 rounded"
                                        rows="3"
                                    />
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                        onClick={() => removeRule(rule.id)}
                                    >
                                        Remove
                                    </button>
                                </form>
                            </li>
                        ))}
                    </ol>

                    {/* Button to add a new rule */}
                    <button
                        className="bg-green-500 text-white py-1 px-2 rounded mt-4 hover:bg-green-600"
                        onClick={addRule}
                    >
                        Add Rule
                    </button>

                    {/* Note about agreeing to the rules */}
                    <p className="mt-6">
                        By joining the Open Source Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminBlockchainClubRules;
