import React, { useState, useEffect } from 'react';
import Header from '../Components/header';

const Login = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const [secondaryTextLineHeight, setSecondaryTextLineHeight] = useState(1.2);

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

    useEffect(() => {
        // Update the secondary text line height
        if (!isMobileScreen) {
            setSecondaryTextLineHeight(1.2); // Set the line height for desktop
        } else {
            setSecondaryTextLineHeight(1.5); // Set the line height for mobile
        }
    }, [isMobileScreen]);

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
    // Define the new text for desktop version
    const newText = !isMobileScreen ? "GitsConnect is a dynamic and interactive platform tailored to meet the unique needs of students within the CS Department" : null;
    
    // Define the class for the welcome text to adjust the size and color
    const welcomeTextClass = isMobileScreen ? "text-4xl text-black" : "text-7xl text-white"; // Adjust the size and color as needed

    // Define the letter spacing for the welcome text
    const welcomeTextLetterSpacing = isMobileScreen ? 'normal' : '0.3em'; // Adjust the letter spacing as needed

    // Define the shadow effect for the welcome text
    const welcomeTextShadow = isMobileScreen ? '0px 2px 4px rgba(0, 0, 0, 0.5)' : 'none'; // Adjust the shadow effect as needed

    // Define the class for the secondary text to adjust the size and color
    const secondaryTextClass = isMobileScreen ? "text-2xl text-purple-500 font-bold" : "text-lg text-black-500 font-bold"; // Adjust the size and color as needed

    // Define the gradient light effect for the secondary text
    const secondaryTextGradient = isMobileScreen ? {
        background: 'linear-gradient(to right, transparent, #8a2be2)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: '0px 0px 15px rgba(138, 43, 226, 0.5)', // Adjust the shadow effect as needed
    } : null;

    // Define the style for the container of welcome text and new text
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: isMobileScreen ? '-30rem' : '1.5rem', // Add margin only for mobile screen
        maxWidth: isMobileScreen ? '100%' : '600px', // Limit the width for desktop version
        wordWrap: 'break-word', // Allow the text to wrap within the container
        lineHeight: isMobileScreen ? '1.5' : '2', // Set line height to ensure three lines of text
    };

    // Define the style for the container of secondary text
    const secondaryTextStyle = {
        width: isMobileScreen ? '90%' : '90%', // Adjust the width for responsiveness
        maxWidth: '800px', // Limit the maximum width for desktop version
        wordWrap: 'break-word', // Allow the text to wrap within the container
        lineHeight: secondaryTextLineHeight, // Set line height to ensure proper spacing
        textAlign: 'center', // Center-align the text
        whiteSpace: 'pre-wrap', // Allow the text to wrap at spaces and breaks when necessary
        marginTop: isMobileScreen ? '0' : '1rem', // Add space between welcome text and secondary text on desktop
        letterSpacing:"0.06em"

    };
    const wordSpacing = {
        wordSpacing: '0.75em', // Adjust the word spacing as per your preference
    };

    return (
        <div style={backgroundImageStyle}>
            <Header />
            <div style={containerStyle}>
                {/* Display the welcome text wrapped in an <h1> tag with animation class */}
                <h1 className={`font-bold mb-4 ${welcomeTextClass} animate-fade-in`} style={{ letterSpacing: welcomeTextLetterSpacing, textShadow: welcomeTextShadow }}>{welcomeText}</h1>
                {/* Display the new text only for desktop version */}
                {!isMobileScreen && (
            <p className={secondaryTextClass} style={{ ...secondaryTextGradient, ...secondaryTextStyle, ...wordSpacing }}>
            <span style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>GitsConnect</span> is a dynamic and interactive<br />
            <span>platform tailored to meet the unique needs</span><br />
            <span>of students within the CS Department</span>
        </p>
        
         
          
                
                )}
            </div>
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
