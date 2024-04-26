import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const OpenSourceClubRules = () => {
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
                    {/* Open Source Club Rules and Regulations */}
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Source Club Rules and Regulations</h2>
                    
                    <ol className="list-decimal pl-5">
                        <li className="mb-4">
                            <strong>Code of Conduct:</strong> Members must maintain respect, professionalism, and inclusivity in all club activities.
                        </li>
                        <li className="mb-4">
                            <strong>Participation:</strong> Active participation is encouraged in club activities, projects, and discussions.
                        </li>
                        <li className="mb-4">
                            <strong>Collaboration:</strong> Members should work collaboratively on open source projects and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong>Transparency:</strong> Members must adhere to open source principles of transparency and open collaboration.
                        </li>
                        <li className="mb-4">
                            <strong>Licensing:</strong> Members must respect open source licenses and ensure proper use and attribution of open source code.
                        </li>
                        <li className="mb-4">
                            <strong>Contribution Guidelines:</strong> Members should follow contribution guidelines and best practices when contributing to open source projects.
                        </li>
                        <li className="mb-4">
                            <strong>Community Engagement:</strong> Members are encouraged to engage with the broader open source community and represent the club positively.
                        </li>
                        <li className="mb-4">
                            <strong>Conflict Resolution:</strong> Disputes should be resolved through respectful and constructive dialogue. Club leadership may mediate if necessary.
                        </li>
                        <li className="mb-4">
                            <strong>Feedback:</strong> Members are encouraged to provide feedback and suggestions to improve club activities and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong>Adherence to Club Policies:</strong> Members must follow all club policies and procedures, including those related to project contributions, event planning, and communication.
                        </li>
                    </ol>

                    <p className="mt-6">
                        By joining the Open Source Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OpenSourceClubRules;
