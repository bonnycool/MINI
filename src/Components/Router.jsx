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
