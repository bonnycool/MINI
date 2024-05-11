import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AIClubRules = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-full md:w-1/5 h-full">
                <Navbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 h-full p-8 mt-10 md:mt-0 bg-gray-100">
                {/* Add Header component at the top */}
                <Header />

                {/* Content area */}
                <div className="flex flex-col gap-6 mt-6">
                    {/* Blockchain Club Rules and Regulations */}
                    <h2 className="text-3xl font-bold mb-6 mt-14 text-gray-800">AI Club Rules and Regulations</h2>
                    
                    <ol className="list-decimal pl-8">
                        <li className="mb-4">
                            <strong className="text-blue-600">Code of Conduct:</strong> All members are expected to adhere to a code of conduct that promotes respect, inclusivity, and professionalism. Harassment or discrimination will not be tolerated.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Participation:</strong> Members are encouraged to actively participate in club activities, including meetings, discussions, and events.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Collaboration:</strong> Members should work collaboratively and contribute to club projects and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Confidentiality:</strong> Members must respect the confidentiality of club discussions and projects. Sensitive information should not be shared outside the club without permission.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Intellectual Property:</strong> Members must respect intellectual property rights and acknowledge sources when using or sharing content within the club.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Compliance:</strong> Members must comply with all applicable laws, regulations, and ethical standards related to blockchain technology.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Attendance:</strong> Members are expected to attend meetings and events regularly. If a member cannot attend, they should notify the club leadership in advance.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Community Engagement:</strong> Members are encouraged to engage with the broader blockchain community and represent the club positively.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Conflict Resolution:</strong> Disputes should be resolved through respectful and constructive dialogue. If necessary, club leadership may mediate conflicts.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Feedback:</strong> Members are encouraged to provide feedback and suggestions for improving club activities and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong className="text-blue-600">Compliance with Club Policies:</strong> Members must follow all club policies and procedures, including those related to event planning, budgeting, and communication.
                        </li>
                    </ol>

                    <p className="text-gray-800">
                        By joining the AI Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIClubRules;
