import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Interface from '../pages/interface';
import Navbar from './navbar';
import Credentials from '../pages/credentials'; // Import the Credentials page

export function RouterPaths() {
    // State to control the visibility of the Navbar
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/interface"
                element={
                    <>
                        <Navbar isOpen={isOpen} />
                        <Interface />
                    </>
                }
            />
            <Route
                path="/credentials"
                element={<Credentials />}
            />
            {/* Add more routes as needed */}
        </Routes>
    );
}
