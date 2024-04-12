import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const maxGitsConnectLogoWidthVh = 10; // Adjust the percentage as needed for GitsConnect logo
    const maxSaintGitsLogoWidthVh = 30; // Adjust the percentage as needed for SaintGits logo

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 768);
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

    return (
        <header className="flex justify-between items-center p-2 text-white" style={{ backgroundColor: "#fff7ed", height: "auto", minHeight: "40px", position: "fixed", top: "0", left: "0", right: "0", zIndex: "1000" }}>
            <div className="flex items-center">
                <img src="../src/Assests/IMAGES/gitsconnectlogo.jpeg" alt="GitsConnect Logo" className="mr-2" style={{ height: "auto", maxWidth: `${maxGitsConnectLogoWidthVh}vh`, maxHeight: "100%", marginRight: "10px" }} />
                <h1 className="text-lg font-bold" style={{ color: "#d1d5db", textShadow: "1px 1px 2px rgba(0,0,0,0.2)", fontSize: "3vw", whiteSpace: "nowrap" }}>GITSCONNECT</h1>
            </div>
            {/* Conditionally render SaintGits logo based on screen size */}
            {!isMobileScreen && (
                <div className="flex items-center">
                    <img src="../src/Assests/IMAGES/saintgitslogo.png" alt="SaintGits Logo" className="mr-2" style={{ height: "auto", maxWidth: `${maxSaintGitsLogoWidthVh}vh`, maxHeight: "100%" }} />
                </div>
            )}
        </header>
    );
};

export default Header;
