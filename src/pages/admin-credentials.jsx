import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // For navigation
import Header from '../Components/header'; // Import the header file
import backgroundImage from '../Assests/IMAGES/saintgitsbg.jpeg'; // Background image

const Admincredentials = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState(''); // State to store login errors

    const navigate = useNavigate(); // For navigation

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@saintgits\.org$/; // Saintgits email validation
        return emailRegex.test(email);
    };

    const handleLogin = async () => {
        setUsernameError('');
        setPasswordError('');
        setLoginError('');

        // Hardcoded login details
        const users = [
            { username: 'blockhead@saintgits.org', password: 'saintgits@', page: '/admin-blockchain' },
            { username: 'aihead@saintgits.org', password: 'saintgits@', page: '/admin-ai' },
            { username: 'cyberhead@saintgits.org', password: 'saintgits@', page: '/admin-cyber' },
            { username: 'openhead@saintgits.org', password: 'saintgits@', page: '/admin-opensource' },
            { username: 'superuser@saintgits.org', password: 'saintgits@', page: '/admin-home' },
        ];

        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            setLoginError('Invalid login credentials.');
            return;
        }

        try {
            // Simulating a successful login with hardcoded credentials
            navigate(user.page); // Navigate to the corresponding page
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            setLoginError('An unexpected error occurred.');
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Header />

            <div className="flex flex-col items-center justify-center w-1/2">
                {/* Username input box */}
                <div className="mb-4 w-1/2">
                    <label htmlFor="username" className="block text-white mb-1">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Admin Login"
                        className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {usernameError && <p className="text-red-500">{usernameError}</p>}
                </div>

                {/* Password input box */}
                <div className="mb-4 w-1/2">
                    <label htmlFor="password" className="block text-white mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full p-2 rounded bg-white text-black border border-gray-300 text-center"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
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

                {/* Display login error */}
                {loginError && <p className="text-red-500">{loginError}</p>}
            </div>
        </div>
    );
};

export default Admincredentials;
