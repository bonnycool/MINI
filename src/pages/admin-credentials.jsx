import React, { useState } from 'react';
import Header from '../Components/header'; // Import the header file
import backgroundImage from '../Assests/IMAGES/saintgitsbg.jpeg'; // Import the background image

const Admincredentials = () => {
    // State variables for username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // State variables for validation errors
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Event handlers for input changes
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Event handler for login button click
    const handleLogin = () => {
        // Reset validation errors
        setUsernameError('');
        setPasswordError('');

        // Validate username
        if (!isValidEmail(username)) {
            setUsernameError('Use Ssaintgits Mail');
            return;
        }

        // Validate password
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        }

        // Add login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    // Function to validate email address
    const isValidEmail = (email) => {
        // Regular expression for validating email address
        const emailRegex = /^[^\s@]+@saintgits\.org$/;
        return emailRegex.test(email);
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Add Header */}
            <Header />

            {/* Form container */}
            <div className="flex flex-col items-center justify-center w-1/2">
                {/* Username input box */}
                <div className="mb-4 w-1/2">
                    <label htmlFor="username" className="block text-white mb-1">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Admin Login"
                        className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
                </div>

                {/* Password input box */}
                <div className="mb-4 w-1/2">
                    <label htmlFor="password" className="block text-white mb-1">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>

                {/* Login button */}
                <div className="text-center w-1/4">
                    <button
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admincredentials;
