import React, { useState, useEffect } from 'react';

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
        handleResize(); // Check on initial render

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogin = () => {
        console.log("Login button clicked");
        // Handle login functionality or redirect to login page
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
                        whiteSpace: "nowrap",
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
                </div>
            )}

            {/* Add the Login button */}
            {isMobileScreen && (
                <button
                    onClick={handleLogin}
                    className="bg-green-500 text-white rounded-full px-4 py-2"
                    style={{
                        position: "absolute",
                        top: "4px",
                        right: "10px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            )}
        </header>
    );
};

export default Headerlogin;
