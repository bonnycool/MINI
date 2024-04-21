import React, { useState, useEffect } from 'react';

const Headerlogin = () => {
    const [headerHeight, setHeaderHeight] = useState("auto");
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isTabletScreen, setIsTabletScreen] = useState(false);
    const maxGitsConnectLogoWidthVh = 10; // Adjust the percentage as needed for GitsConnect logo
    const maxGitsConnectLogoMobileWidth = 9; // Adjust the maximum width of the logo on mobile screens
    const maxSaintGitsLogoWidthVh = 30; // Adjust the percentage as needed for SaintGits logo
    const mobileHeaderHeight = "45px"; // Adjust the height of the header component in mobile version

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobileScreen(screenWidth <= 768);
            setIsTabletScreen(screenWidth > 768 && screenWidth <= 1024);
            setHeaderHeight(screenWidth <= 768 ? mobileHeaderHeight : "auto"); // Adjust the header height for mobile screen
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on component mount

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
                height: headerHeight,
                minHeight: "40px",
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
                    className="mr-2"
                    style={{
                        height: "auto",
                        maxWidth: `${isMobileScreen ? maxGitsConnectLogoMobileWidth + 'vw' : maxGitsConnectLogoWidthVh + 'vh'}`,
                        maxHeight: "100%",
                        marginRight: "10px",
                    }}
                />
                {!isMobileScreen && (
                    <h1
                        className="text-lg font-bold"
                        style={{
                            color: "#d1d5db",
                            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                            fontSize: isTabletScreen ? "3.5vw" : "3.5vw",
                            whiteSpace: "nowrap",
                            marginLeft: isTabletScreen ? "5px" : "0",
                        }}
                    >
                        GITSCONNECT
                    </h1>
                )}
            </div>

            {!isMobileScreen && (
                <div className="flex items-center">
                    <img
                        src="../src/Assests/IMAGES/saintgitslogo.png"
                        alt="SaintGits Logo"
                        className="mr-2"
                        style={{ height: "auto", maxWidth: `${maxSaintGitsLogoWidthVh}vh`, maxHeight: "100%" }}
                    />
                </div>
            )}

            {isMobileScreen && (
                <h1
                    className="text-2xl font-bold"
                    style={{ color: "#d1d5db", textShadow: "1px 1px 2px rgba(0,0,0,0.2)", whiteSpace: "nowrap", flex: "1", textAlign: "center", marginLeft: "10px" }}
                >
                    GITSCONNECT
                </h1>
            )}

            {isMobileScreen && (
                <button
                    onClick={handleLogin}
                    className="bg-green-500 text-white rounded-full px-4 py-2"
                    style={{
                        position: "absolute",
                        top: "10px",
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
