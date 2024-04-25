import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login'; // Import the Login component
import Home from '../pages/home';
import Homenavbar from './homenavabr';
import Navbar from './navbar'; // Import the Navbar component
import Credentials from '../pages/credentials';
import Admincredentials from '../pages/admincredentials';
import SuperAdmin from '../pages/superadmin'; // Import the Super Admin component
import Supernavbar from './supernavbar'; // Import the Supernavbar component
import Blockchain from '../pages/blockchain';
import AI from '../pages/aiclub';
import Opensource from '../pages/opensource';
import Cyber from '../pages/cybersecurity';
import AboutUs from '../pages/about';
import Contact from '../pages/contact';
import ClubCalendar from '../pages/clubcalendar';
import UpcomingEvents from '../pages/blockchainevents';
import BlockchainEvents from '../pages/blockchainevents';
import AIEvents from '../pages/aievents';
import OSEvents from '../pages/opensourceevents';
import CyberEvents from '../pages/cyberevents';
import AdminCalendar from '../pages/admincalendar';


export function RouterPaths() {
    return (
        <Routes>
            {/* Route for the login page */}
            <Route path="/" element={<Login />} />

            {/* Route for the interface page */}
            <Route
                path="/home"
                element={
                    <>
                        <Homenavbar />
                        <Home />
                    </>
                }
            />

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
            <Route path="/clubcalendar" element={<ClubCalendar />} />
            <Route path="/blockchainevents" element={<BlockchainEvents />} />
            <Route path="/aievents" element={<AIEvents />} />
            <Route path="/opensourceevents" element={<OSEvents />} />
            <Route path="/cyberevents" element={<CyberEvents />} />
            <Route path="/admincalendar" element={<AdminCalendar />} />

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