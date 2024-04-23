import React, { useState } from 'react';
import Header from '../Components/header';

const Credentials = () => {
    // State variables for username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Event handlers for input changes
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Event handler for login button click
    const handleLogin = () => {
        // Add login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Header/>
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-2xl mb-4">Login</h2>
                {/* Username input box */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>

                {/* Password input box */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                {/* Login button */}
                <div className="text-center">
                    <button
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Credentials;
