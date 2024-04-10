// Header.js

import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-2 text-white" style={{ backgroundColor: "#fff7ed", height: "50px", position: "fixed", top: "0", left: "0", right: "0", zIndex: "1000" }}>
            <div className="flex items-center">
                <img src="../src/Assests/IMAGES/gitsconnectlogo.jpeg" alt="GitsConnect Logo" className="mr-2" style={{ height: "auto", width: "auto", maxHeight: "100%", maxWidth: "120px" }} />
                <h1 className="text-lg font-bold" style={{ color: "#d1d5db", textShadow: "1px 1px 2px rgba(0,0,0,0.2)", fontSize: "24px", whiteSpace: "nowrap" }}>GITSCONNECT</h1>
            </div>
            <div className="flex items-center">
                <img src="../src/Assests/IMAGES/saintgitslogo.png" alt="SaintGits Logo" className="mr-2" style={{ height: "auto", width: "auto", maxHeight: "100%" }} />
            </div>
        </header>
    );
};

export default Header;
