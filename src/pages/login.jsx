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
        minHeight: '100vh', // Ensure the background covers the entire viewport
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // Define the welcome text for desktop and mobile versions
    const welcomeText = isMobileScreen ? "WELCOME TO GITSCONNECT" : "WELCOME!";
    // Define the secondary text for mobile version
    const secondaryText = isMobileScreen ? "HERE TO CONNECT" : null;
    
    // Define the class for the welcome text to adjust the size and color
    const welcomeTextClass = isMobileScreen ? "text-4xl text-black" : "text-7xl text-white"; // Adjust the size and color as needed

    // Define the letter spacing for the welcome text
    const welcomeTextLetterSpacing = isMobileScreen ? 'normal' : '0.3em'; // Adjust the letter spacing as needed

    // Define the margin-top for the welcome text to position it relatively
    const welcomeTextMarginTop = isMobileScreen ? '-30rem' : '-0.9em'; // Adjust the margin-top as needed

    // Define the shadow effect for the welcome text
    const welcomeTextShadow = isMobileScreen ? '0px 2px 4px rgba(0, 0, 0, 0.5)' : 'none'; // Adjust the shadow effect as needed

    // Define the class for the secondary text to adjust the size and color
    const secondaryTextClass = isMobileScreen ? "text-2xl text-purple-500 font-bold" : null;

    // Define the gradient light effect for the secondary text
    const secondaryTextGradient = isMobileScreen ? {
        background: 'linear-gradient(to right, transparent, #8a2be2)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0px 0px 15px rgba(138, 43, 226, 0.5)', // Adjust the shadow effect as needed
    } : null;

    return (
        <div style={backgroundImageStyle}>
            <Header />
            {/* Display the welcome text wrapped in an <h1> tag with animation class */}
            <h1 className={`font-bold text-center mb-4 ${welcomeTextClass} animate-fade-in`} style={{ letterSpacing: welcomeTextLetterSpacing, marginTop: welcomeTextMarginTop, textShadow: welcomeTextShadow }}>{welcomeText}</h1>
            {/* Display the secondary text */}
            {secondaryText && <h4 className={`text-center mb-4 ${secondaryTextClass}`} style={secondaryTextGradient}>{secondaryText}</h4>}
            {/* Login form will go here */}
            <style>{`
                @keyframes fadeInFromBelow {
                    from { opacity: 0; transform: translateY(100%); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fadeInFromBelow 1s ease;
                }
            `}</style>
        </div>
    );
};

export default Login;
