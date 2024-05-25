import React, { useState, useEffect } from 'react';
import Homenavbar from '../Components/homenavabr';
import Header from '../Components/header';
import Box1Image from '../Assests/IMAGES/alan.jpeg';
import Box2Image from '../Assests/IMAGES/bonny.jpg';
import Box3Image from '../Assests/IMAGES/christopher.jpg';
import Box4Image from '../Assests/IMAGES/alon.jpg';

const AdminAboutUs = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set a delay to simulate loading time
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="md:w-1/5 bg-gray-900 text-white">
                <Homenavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8 bg-gray-100">
                {/* Header component */}
                <Header />

                {/* About Us section */}
                <div className={`about-us bg-white rounded-lg shadow-md mb-8 p-8 md:p-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are a group of S6 CS students from Saintgits College of Engineering who are implementing this for our mini project. We are passionate about carrying out such projects as it allows us to apply our knowledge and skills in a real-world context, solve challenges, and learn new things along the way. Our aim is to create a meaningful and impactful project.
                        </p>
                    </div>
                </div>

                {/* Other boxes section */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Box 2 */}
                    <div className="box p-8 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <img src={Box1Image} alt="Alan Roni Mathew" className="w-20 h-20 rounded-full mb-4" />
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Alan Roni Mathew</h2>
                            <p className="text-base text-gray-700">
                                Full stack developer. Experienced in both front-end and back-end technologies. Passionate about building intuitive user interfaces and efficient server-side applications. Enjoys solving complex problems and contributing to innovative projects.
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="box p-8 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <img src={Box4Image} alt="Alon John" className="w-20 h-20 rounded-full mb-4" />
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Alon John</h2>
                            <p className="text-base text-gray-700">
                                Full stack developer. Proficient in building scalable and robust server-side applications. Strong problem-solving skills and a passion for optimizing performance. Enjoys working with databases and creating efficient data structures.
                            </p>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="box p-8 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <img src={Box2Image} alt="Bonny David" className="w-20 h-20 rounded-full mb-4" />
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Bonny David</h2>
                            <p className="text-base text-gray-700">
                                Full stack developer. Skilled in a variety of programming languages and frameworks. Focuses on creating seamless and efficient user experiences. Dedicated to continuous learning and staying up-to-date with the latest technology trends.
                            </p>
                        </div>
                    </div>
                    {/* Box 5 */}
                    <div className="box p-8 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
                        <img src={Box3Image} alt="Christopher Thomas" className="w-20 h-20 rounded-full mb-4" />
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Christopher Thomas</h2>
                            <p className="text-base text-gray-700">
                                Full stack developer. Expert in crafting visually appealing and user-friendly interfaces. A keen eye for design and attention to detail. Strives to deliver exceptional user experiences through responsive and dynamic web pages.
                            </p>
                        </div>
                    </div>

                    {/* Box 5 */}
                    <div className="box p-8 bg-white rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
                        <img src={Box4Image} alt="Alon John" className="w-20 h-20 rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Alon John</h2>
                            <p className="text-base text-gray-700">
                                Front-end developer. Proficient in building scalable and robust server-side applications. Strong problem-solving skills and a passion for optimizing performance. Enjoys working with databases and creating efficient data structures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAboutUs;
