import React from 'react';

const TeamMember = ({ name, image, description }) => (
  <div className="box p-8 bg-white rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
    <img src={image} alt={name} className="w-20 h-20 rounded-full mr-4" />
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-base text-gray-700">{description}</p>
    </div>
  </div>
);

const AboutUs = () => {
  // rest of the code

  return (
    // rest of the code

    <div className={`grid grid-cols-2 gap-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <TeamMember name="Alan Roni Mathew" image={Box1Image} description="Full stack developer. Experienced in both front-end and back-end technologies. Passionate about building intuitive user interfaces and efficient server-side applications. Enjoys solving complex problems and contributing to innovative projects." />
      <TeamMember name="Bonny David" image={Box2Image} description="Full stack developer. Skilled in a variety of programming languages and frameworks. Focuses on creating seamless and efficient user experiences. Dedicated to continuous learning and staying up-to-date with the latest technology trends." />
      <TeamMember name="Christopher Thomas" image={Box3Image} description="Front-end developer. Expert in crafting visually appealing and user-friendly interfaces. A keen eye for design and attention to detail. Strives to deliver exceptional user experiences through responsive and dynamic web pages." />
      <TeamMember name="Alon John" image={Box4Image} description="Back-end developer. Proficient in building scalable and robust server-side applications. Strong problem-solving skills and a passion for optimizing performance. Enjoys working with databases and creating efficient data structures." />
    </div>
  );
};

export default AboutUs;