import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import gitsLogo from '../Assests/IMAGES/gitsconnectlogo.jpeg';

const Userheader = ({ username }) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
      setIsMobileScreen(isMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check for screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run only on initial render

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout/'); // Send logout request to backend
      navigate('/credentials'); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header
      className={`flex justify-between items-center p-2`}
      style={{
        backgroundColor: "#fff7ed",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
        height: isMobileScreen ? '45px' : 'auto', // Adjust header height for mobile
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={gitsLogo}
          alt="GitsConnect Logo"
          style={{
            height: "auto",
            maxWidth: isMobileScreen ? '12vw' : '9vh', // Adjust size based on screen type
            cursor: 'pointer', // Indicate interactivity
          }}
        />
        {/* Space between logo and text */}
        {!isMobileScreen && (
          <div style={{ marginLeft: '10px' }}> {/* Add spacing */}
            <h1
              className="text-lg font-bold"
              style={{
                color: "#000",
                fontSize: "3.5vw", // Adjust font size
              }}
            >
              GITSCONNECT
            </h1>
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="flex items-center" style={{ marginRight: '28px' }}>
        <div
          className="relative cursor-pointer"
          onClick={toggleDropdown}
          style={{ color: "black" }} // Set the profile icon color to black
        >
          <FaUserCircle size={39} /> {/* Profile icon */}
        </div>

        {isDropdownVisible && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              zIndex: 1000,
              padding: '0.5em 1em',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'white',
              borderRadius: '10px',
            }}
          >
            <div onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              <span>{username}</span> {/* Display the username */}
            </div>
            <div>
              <Link to="/edit-profile" style={{ cursor: 'pointer' }}>Edit Profile</Link> {/* Link to edit profile */}
            </div>
            <div onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</div> {/* Trigger logout */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Userheader;
