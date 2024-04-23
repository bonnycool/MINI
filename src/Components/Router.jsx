import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login'; // Import the Login component
import Interface from '../pages/interface';
import Navbar from './navbar'; // Import the Navbar component
import Credentials from '../pages/credentials';
import Admincredentials from '../pages/admincredentials'; // Import the Credentials component

export function RouterPaths() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/interface"
                element={
                    <>
                        <Navbar />
                        <Interface />
                    </>
                }
            />
            <Route path="/credentials" element={<Credentials />} /> {/* Add the Credentials route */}
            <Route path="/admincredentials" element={<Admincredentials />} /> {/* Add the Credentials route */}
            {/* Add more routes as needed */}
        </Routes>
    );
}
