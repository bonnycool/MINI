import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Headerlogin = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isTabletScreen, setIsTabletScreen] = useState(false);

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

    const handleLogin = () => {
        console.log("Login button clicked");
        // Handle login logic or redirect to login page
    };

    return (
        <header
            className="flex justify-between items-center p-2 text-white"
            style={{
                backgroundColor: "#fff7ed",
                position: "fixed", // Keeps the header in place
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
                        maxWidth: isMobileScreen ? '8vw' : '10vh',
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

            {/* SaintGits logo for desktop and tablet */}
            {!isMobileScreen && (
                <div className="flex items-center">
                    <img
                        src="../src/Assests/IMAGES/saintgitslogo.png"
                        alt="SaintGits Logo"
                        style={{
                            height: "auto",
                            maxWidth: `${30}vh`,
                            maxHeight: "100%",
                        }}
                    />
                </div>
            )}

            {/* Mobile-specific login button with centered position */}
            {isMobileScreen && (
                <div className="flex items-center justify-end flex-1"> 
                    <button
                        onClick={handleLogin}
                        className="bg-green-500 text-white rounded-full p-3"
                        style={{
                            position: "relative",
                            top: "0", // Centers vertically in the header
                            right: "10px", // Ensures it's on the right side
                            cursor: "pointer",
                            padding: "0.5em", // Compact padding
                        }}
                    >
                        <FaSignInAlt size={24} />
                    </button>
                </div>
            )}
        </header>
    );
};

export default Headerlogin;
