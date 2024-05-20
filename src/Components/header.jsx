import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState("auto");
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [isTabletScreen, setIsTabletScreen] = useState(false);
    const maxGitsConnectLogoWidthVh = 10; // Adjust the percentage as needed for GitsConnect logo
    const maxGitsConnectLogoMobileWidth = 9; // Adjust the maximum width of the logo on mobile screens
    const maxSaintGitsLogoWidthVh = 30; // Adjust the percentage as needed for SaintGits logo
    const mobileHeaderHeight = "45px"; // Adjust the height of the header component in mobile version

    const navigate = useNavigate(); // Navigation hook for route changes

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobileScreen(screenWidth <= 768);
            setIsTabletScreen(screenWidth > 768 && screenWidth <= 1024);
            setHeaderHeight(screenWidth <= 768 ? mobileHeaderHeight : "auto"); // Adjust the header height for mobile screen
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize on initial load
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogout = () => {
        // Navigate to the admin credentials page
        navigate('/');
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
                fontFamily: "'Montserrat', sans-serif"
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
                        marginRight: "10px"
                    }}
                />
                {/* Render GitsConnect text */}
                {!isMobileScreen && (
                    <h1
                        className="text-lg font-bold"
                        style={{
                            color: "#000",
                            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                            fontSize: isTabletScreen ? "3.5vw" : "3.5vw",
                            whiteSpace: "nowrap",
                            marginLeft: isTabletScreen ? "5px" : "0"
                        }}
                    >
                        GITSCONNECT
                    </h1>
                )}
            </div>
            {/* Conditionally render GitsConnect text in the middle for mobile view */}
            {isMobileScreen && (
                <h1
                    className="text-2xl font-bold"
                    style={{
                        color: "#000",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        whiteSpace: "nowrap",
                        flex: "1",
                        textAlign: "center",
                        marginLeft: "10px",
                        fontWeight: "bold"
                    }}
                >
                    GITSCONNECT
                </h1>
            )}
            {/* Logout button */}
            <button
                onClick={handleLogout}
                className="text-black font-bold px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300"
                style={{
                    cursor: 'pointer',
                    marginRight: '10px',
                    textDecoration: 'none'
                }}
            >
                Logout
            </button>
        </header>
    );
};

export default Header;

