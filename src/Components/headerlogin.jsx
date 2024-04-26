import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeaderLogin = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isTabletScreen, setIsTabletScreen] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const navigate = useNavigate(); // Navigation hook for route changes

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobileScreen(screenWidth <= 768);
            setIsTabletScreen(screenWidth > 768 && screenWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on render

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLoginButtonClick = () => {
        // Toggle the dropdown visibility
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleAdminLogin = () => {
        // Navigate to the admin login page
        navigate('/admincredentials');
        setIsDropdownVisible(false); // Hide the dropdown after click
    };

    const handleUserLogin = () => {
        // Navigate to the user login page
        navigate('/credentials');
        setIsDropdownVisible(false); // Hide the dropdown after click
    };

    return (
        <header
            className="flex justify-between items-center p-2 text-white"
            style={{
                backgroundColor: "#fff7ed",
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "1000",
                padding: "0.5em 1em", // Compact padding
            }}
        >
            <div className="flex items-center">
                <img
                    src="../src/Assests/IMAGES/gitsconnectlogo.jpeg"
                    alt="GitsConnect Logo"
                    style={{
                        height: "auto",
                        maxWidth: `${isMobileScreen ? '9vw' : '10vh'}`,
                        maxHeight: "100%",
                        marginRight: "10px",
                    }}
                />
                <h1
                    className={`text-lg font-bold ${
                        isMobileScreen ? "text-2xl text-center flex-1" : ""
                    }`}
                    style={{
                        color: "#d1d5db",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        fontSize: isTabletScreen ? "3.5vw" : "3.5vw",
                    }}
                >
                    GITSCONNECT
                </h1>
            </div>
              {/* Render SaintGits logo only for desktop and tablet */}
              {!isMobileScreen && (
                <div className="flex items-center">
                    <img
                        src="../src/Assests/IMAGES/saintgitslogo.png"
                        alt="SaintGits Logo"
                        className="mr-2"
                        style={{
                            height: "auto",
                            maxWidth: `${30}vh`,
                            maxHeight: "100%",
                        }}
                    />
                </div>)}

            {/* Dropdown for Admin and User Login on Mobile */}
            {isMobileScreen && (
                <div className="flex items-center justify-end flex-1">
                    <button
                        onClick={handleLoginButtonClick}
                        className="bg-green-500 text-white rounded-full p-3"
                        style={{
                            position: "relative",
                            top: "0",
                            right: "10px",
                            cursor: "pointer",
                            padding: "0.5em",
                        }}
                    >
                        <FaSignInAlt size={24} />
                    </button>

                    {/* Dropdown menu with login options */}
                    {isDropdownVisible && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '100%', // Position below the button
                                right: '10px', // Right-aligned with some margin
                                backgroundColor: 'black',
                                borderRadius: '10px',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Light shadow
                                padding: '10px', // Padding for menu
                            }}
                        >
                            <div>
                                <button
                                    style={{ padding: '10px', cursor: 'pointer' }}
                                    onClick={handleAdminLogin}
                                >
                                    Admin Login
                                </button>
                            </div>
                            <div>
                                <button
                                    style={{ padding: '10px', cursor: 'pointer' }}
                                    onClick={handleUserLogin}
                                >
                                    User Login
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default HeaderLogin;
