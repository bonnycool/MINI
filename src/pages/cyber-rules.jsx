import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const CyberClubRules = () => {
    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 mt-10 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-6">
                    {/* Cybersecurity Club Rules and Regulations */}
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Cybersecurity Club Rules and Regulations</h2>
                    
                    <ol className="list-decimal pl-5">
                        <li className="mb-4">
                            <strong>Code of Conduct:</strong> Members must maintain a respectful, professional, and ethical demeanor in all club activities and discussions.
                        </li>
                        <li className="mb-4">
                            <strong>Participation:</strong> Active participation is encouraged in club activities, events, and discussions on cybersecurity topics.
                        </li>
                        <li className="mb-4">
                            <strong>Collaboration:</strong> Members should work collaboratively on cybersecurity projects and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong>Confidentiality:</strong> Members must respect confidentiality and avoid sharing sensitive information outside of the club without permission.
                        </li>
                        <li className="mb-4">
                            <strong>Compliance:</strong> Members must comply with all applicable laws, regulations, and ethical standards related to cybersecurity.
                        </li>
                        <li className="mb-4">
                            <strong>Security Best Practices:</strong> Members should follow security best practices and guidelines in their projects and activities.
                        </li>
                        <li className="mb-4">
                            <strong>Community Engagement:</strong> Members are encouraged to engage with the broader cybersecurity community and represent the club positively.
                        </li>
                        <li className="mb-4">
                            <strong>Responsible Disclosure:</strong> Members must follow responsible disclosure practices when identifying vulnerabilities in systems or software.
                        </li>
                        <li className="mb-4">
                            <strong>Conflict Resolution:</strong> Disputes should be resolved through respectful and constructive dialogue. Club leadership may mediate if necessary.
                        </li>
                        <li className="mb-4">
                            <strong>Feedback:</strong> Members are encouraged to provide feedback and suggestions to improve club activities and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong>Adherence to Club Policies:</strong> Members must follow all club policies and procedures, including those related to event planning, budgeting, and communication.
                        </li>
                    </ol>

                    <p className="mt-6">
                        By joining the Cybersecurity Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CyberClubRules;
