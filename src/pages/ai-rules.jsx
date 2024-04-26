import React from 'react';
import Navbar from '../Components/navbar'; // Import the Navbar component
import Header from '../Components/header'; // Import the Header component

const AIClubRules = () => {
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
                    {/* AI Club Rules and Regulations */}
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Club Rules and Regulations</h2>
                    
                    <ol className="list-decimal pl-5">
                        <li className="mb-4">
                            <strong>Code of Conduct:</strong> All members must uphold a high standard of professionalism and respect for others in discussions and collaborations.
                        </li>
                        <li className="mb-4">
                            <strong>Participation:</strong> Members are expected to actively engage in club activities, including meetings, workshops, and projects.
                        </li>
                        <li className="mb-4">
                            <strong>Collaboration:</strong> Members should collaborate effectively with others and contribute positively to club projects.
                        </li>
                        <li className="mb-4">
                            <strong>Confidentiality:</strong> Members must respect the confidentiality of discussions and projects. Sensitive information should not be shared outside the club without permission.
                        </li>
                        <li className="mb-4">
                            <strong>Ethical AI Practices:</strong> Members must adhere to ethical AI practices and ensure their work does not harm others or infringe on privacy rights.
                        </li>
                        <li className="mb-4">
                            <strong>Compliance:</strong> Members must comply with applicable laws, regulations, and ethical standards related to AI technology.
                        </li>
                        <li className="mb-4">
                            <strong>Attendance:</strong> Members are expected to attend meetings and events regularly. If a member cannot attend, they should notify club leadership in advance.
                        </li>
                        <li className="mb-4">
                            <strong>Community Engagement:</strong> Members are encouraged to engage with the broader AI community and represent the club positively.
                        </li>
                        <li className="mb-4">
                            <strong>Conflict Resolution:</strong> Conflicts should be resolved through respectful and constructive dialogue. If necessary, club leadership may mediate disputes.
                        </li>
                        <li className="mb-4">
                            <strong>Feedback:</strong> Members are encouraged to provide feedback and suggestions for improving club activities and initiatives.
                        </li>
                        <li className="mb-4">
                            <strong>Adherence to Club Policies:</strong> Members must follow all club policies and procedures, including those related to event planning, budgeting, and communication.
                        </li>
                    </ol>

                    <p className="mt-6">
                        By joining the AI Club, members agree to abide by these rules and regulations. Violations of these rules may result in disciplinary action or removal from the club.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIClubRules;
