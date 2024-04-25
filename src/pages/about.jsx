import React from 'react';
import Homenavbar from '../Components/homenavabr'; // Import the navbar component
import Header from '../Components/header';

const AboutUs = () => {
    return (
        <div className="flex h-screen">
            {/* Section A: Navbar on the left side */}
            <div className="w-1/5">
                <Homenavbar />
            </div>

            {/* Section B: Main content area */}
            <div className="flex-1 p-8">
                {/* Header component */}
                <Header />

                {/* Content area */}
                <div className="mt-12 grid grid-cols-1 gap-6 text-white">
                    {/* Box 1 */}
                    <div className="p-6 rounded-lg bg-blue-600 text-center">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p>We are a group of S6 CS students from Saintgits College of Engineering who are implementing this for our mini project. We are passionate about carrying out such projects as it allows us to apply our knowledge and skills in a real-world context, solve challenges, and learn new things along the way. Our aim is to create a meaningful and impactful project.</p>
                    </div>

                    {/* Box 2 */}
                    <div className="p-6 rounded-lg bg-green-700 text-center">
                        <h2 className="text-2xl font-bold mb-2">Alan Roni Mathew</h2>
                        <p>Full stack developer. Experienced in both front-end and back-end technologies. Passionate about building intuitive user interfaces and efficient server-side applications. Enjoys solving complex problems and contributing to innovative projects.</p>
                    </div>

                    {/* Box 3 */}
                    <div className="p-6 rounded-lg bg-orange-600 text-center">
                        <h2 className="text-2xl font-bold mb-2">Bonny David</h2>
                        <p>Full stack developer. Skilled in a variety of programming languages and frameworks. Focuses on creating seamless and efficient user experiences. Dedicated to continuous learning and staying up-to-date with the latest technology trends.</p>
                    </div>

                    {/* Box 4 */}
                    <div className="p-6 rounded-lg bg-red-600 text-center">
                        <h2 className="text-2xl font-bold mb-2">Christopher Thomas</h2>
                        <p>Front-end developer. Expert in crafting visually appealing and user-friendly interfaces. A keen eye for design and attention to detail. Strives to deliver exceptional user experiences through responsive and dynamic web pages.</p>
                    </div>

                    {/* Box 5 */}
                    <div className="p-6 rounded-lg bg-purple-700 text-center">
                        <h2 className="text-2xl font-bold mb-2">Alon John</h2>
                        <p>Back-end developer. Proficient in building scalable and robust server-side applications. Strong problem-solving skills and a passion for optimizing performance. Enjoys working with databases and creating efficient data structures.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
