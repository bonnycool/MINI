import React, { useState, useEffect } from 'react';
import Header from '../Components/header';

const Login = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

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

    // Define the background image URLs for desktop and mobile versions
    const desktopBackground = '../src/Assests/IMAGES/saintgitsbg.jpeg';
    const mobileBackground = '../src/Assests/imagesroni/Handshake1.jpg';

    // Conditionally set the background image style based on the isMobileScreen state
    const backgroundImageStyle = {
        backgroundImage: `url(${isMobileScreen ? mobileBackground : desktopBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <Header />
            <div className="min-h-screen flex items-center justify-center" style={backgroundImageStyle}>
                <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                    {/* Login form will go here */}
                </div>
            </div>
        </div>
    );
};

export default Login;

