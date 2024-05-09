import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login'; // Import the Login component
import Home from '../pages/home';
import Homenavbar from './homenavabr';
import Navbar from './navbar'; // Import the Navbar component
import Credentials from '../pages/credentials';
import Admincredentials from '../pages/admin-credentials';
import SuperAdmin from '../pages/super-admin'; // Import the Super Admin component
import Supernavbar from './supernavbar'; // Import the Supernavbar component
import Blockchain from '../pages/blockchain';
import AI from '../pages/ai-club';
import Opensource from '../pages/opensource';
import Cyber from '../pages/cyber-security';
import AboutUs from '../pages/about';
import Contact from '../pages/contact';
import ClubCalendar from '../pages/club-calendar';
import BlockchainEvents from '../pages/blockchain-events';
import AIEvents from '../pages/ai-events';
import OSEvents from '../pages/opensource-events';
import CyberEvents from '../pages/cyber-events';
import Dutyleave from '../pages/duty-leave';
import AdminCalendar from '../pages/admin-calendar';
import AdminDutyLeave from '../pages/admin-duty-leave';
import AdminBlockchain from '../pages/admin-blockchain';
import AdminHome from '../pages/admin-home';
import AdminNavbar from './adminnavbar';
import AdminAboutUs from '../pages/admin-about';
import BlockchainClubMaterials from '../pages/blockchain-club-materials';
import AdminBlockchainEvents from '../pages/admin-blockchain-events';
import BlockchainClubRules from '../pages/blockchain-rules';
import OpenSourceClubRules from '../pages/opensource-rules';
import AIClubRules from '../pages/ai-rules';
import CyberClubRules from '../pages/cyber-rules';
import AdminBlockchainClubMaterials from '../pages/admin-blockchain-club-materials';
import CyberClubMaterials from '../pages/cyber-club-materials';
import OpensourceClubMaterials from '../pages/opensource-club-materials';
import AIClubMaterials from '../pages/ai-club-materials';
import CybersecurityClubContact from '../pages/cyber-support';
import AIClubContactInfo from '../pages/ai-support';
import OpenSourceClubContact from '../pages/opensource-support';
import BlockchainClubContact from '../pages/blockchain-support';
import AdminAIClubContactInfo from '../pages/admin-ai-support';
import AdminBlockchainClubContact from '../pages/admin-blockchain-support';
import AdminCybersecurityClubContact from '../pages/admin-cyber-support';
import AdminOpenSourceClubContact from '../pages/admin-opensource-support';
import AdminOpensourceClubMaterials from '../pages/admin-opensource-club-materials';
import AdminOpensource from '../pages/admin-opensource';
import AdminOpensourceEvents from '../pages/admin-opensource-events';
import AdminOpenSourceClubRules from '../pages/admin-opensource-rules';
import AdminBlockchainClubRules from '../pages/admin-blockchain-rules';
import AdminCyber from '../pages/admin-cyber';
import AdminCyberEvents from '../pages/admin-cyber-events';
import AdminCyberClubRules from '../pages/admin-cyber-rules';
import AdminCyberClubMaterials from '../pages/admin-cyber-club-materials';
import AdminAI from '../pages/admin-ai';
import AdminAIEvents from '../pages/admin-ai-events';
import AdminAIClubRules from '../pages/admin-ai-rules';
import AdminAIClubMaterials from '../pages/admin-ai-club-materials';
import ProtectedRoute from './protected';
import Profile from './profile';

export function RouterPaths() {
    return (
        <Routes>
            {/* Route for the login page */}
            <Route path="/" element={<Login />} />

            {/* Route for the interface page */}
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                    <>
                        <Homenavbar />
                        <Home />
                    </>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin-home"
                element={
                    <>
                        <AdminNavbar />
                        <AdminHome />
                    </>
                }
            />
             <Route path="/edit-profile" element={<Profile/>} />
            {/* Route for the student credentials page */}
            <Route path="/credentials" element={<Credentials />} />

            {/* Route for the admin credentials page */}
            <Route path="/admincredentials" element={<Admincredentials />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/aiclub" element={<AI />} />
            <Route path="/opensource" element={<Opensource />} />
            <Route path="/cybersecurity" element={<Cyber />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/club-calendar" element={<ClubCalendar />} />
            <Route path="/blockchain-events" element={<BlockchainEvents />} />
            <Route path="/ai-events" element={<AIEvents />} />
            <Route path="/opensource-events" element={<OSEvents />} />
            <Route path="/cyber-events" element={<CyberEvents />} />
            <Route path="/admin-calendar" element={<AdminCalendar />} />
            <Route path="/duty-leave" element={<Dutyleave />} />
            <Route path="/admin-duty-leave" element={<AdminDutyLeave />} />
            <Route path="/admin-blockchain" element={<AdminBlockchain />} />
            <Route path="/admin-about" element={<AdminAboutUs />} />
            <Route path="/admin-blockchain-events" element={<AdminBlockchainEvents />} />
            <Route path="/blockchain-club-materials" element={<BlockchainClubMaterials />} />
            <Route path="/admin-blockchain-club-materials" element={<AdminBlockchainClubMaterials />} />
            <Route path="/ai-rules" element={<AIClubRules />} />
            <Route path="/blockchain-rules" element={<BlockchainClubRules />} />
            <Route path="/opensource-rules" element={<OpenSourceClubRules />} />
            <Route path="/cyber-rules" element={<CyberClubRules />} />
            <Route path="/cyber-club-materials" element={<CyberClubMaterials />} />
            <Route path="/ai-club-materials" element={<AIClubMaterials />} />
            <Route path="/opensource-club-materials" element={<OpensourceClubMaterials />} />
            <Route path="/cyber-support" element={<CybersecurityClubContact />} />
            <Route path="/ai-support" element={<AIClubContactInfo />} />
            <Route path="/blockchain-support" element={<BlockchainClubContact />} />
            <Route path="/opensource-support" element={<OpenSourceClubContact />} />
            <Route path="/admin-blockchain-support" element={<AdminBlockchainClubContact />} />
            <Route path="/admin-ai-support" element={<AdminAIClubContactInfo />} />
            <Route path="/admin-opensource-support" element={<AdminOpenSourceClubContact />} />
            <Route path="/admin-cyber-support" element={<AdminCybersecurityClubContact />} />
            <Route path="/admin-opensource-rules" element={<AdminOpenSourceClubRules />} />
            <Route path="/admin-opensource-support" element={<AdminOpenSourceClubContact />} />
            <Route path="/admin-opensource-club-materials" element={<AdminOpensourceClubMaterials />} />
            <Route path="/admin-opensource" element={<AdminOpensource />} />
            <Route path="/admin-opensource-events" element={<AdminOpensourceEvents />} />
            <Route path="/admin-blockchain-rules" element={<AdminBlockchainClubRules />} />
            <Route path="/admin-cyber-rules" element={<AdminCyberClubRules />} />
            <Route path="/admin-cyber" element={<AdminCyber />} />
            <Route path="/admin-cyber-events" element={<AdminCyberEvents />} />
            <Route path="/admin-cyber-club-materials" element={<AdminCyberClubMaterials />} />
            <Route path="/admin-ai" element={<AdminAI />} />
            <Route path="/admin-ai-events" element={<AdminAIEvents />} />
            <Route path="/admin-ai-rules" element={<AdminAIClubRules />} />
            <Route path="/admin-ai-club-materials" element={<AdminAIClubMaterials />} />




            {/* Route for the Super Admin page */}
            <Route
                path="/superadmin"
                element={
                    <>
                        <Supernavbar /> {/* Add the Supernavbar component */}
                        <SuperAdmin />
                    </>
                }
            />
            {/* Add more routes as needed */}
        </Routes>
    );
}