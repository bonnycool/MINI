import React from 'react';
import Header from "../Components/header";
import Box1Image from '../Assests/imagesroni/blockchain1.jpg';
import Box2Image from '../Assests/imagesroni/cyber1.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/ai1.jpg';

const Interface = () => {
   
  return (
    <div style={{ paddingTop: '100px' }}> {/* Adjust the top padding as needed */}
      <Header />
      {/* Container for the entire content */}
      <div className="flex justify-center mt-16">
        <div className="container flex flex-row">
          {/* Section A (Left side for navigation bar) */}
          <div className="w-1/4">
            {/* Placeholder for navigation bar */}
          </div>

          {/* Section B (Middle section with two boxes) */}
          <div className="w-1/3 flex flex-col items-center">
            {/* Box 1 in the top */}
            <div
              className="w-full h-64 mb-8 mr-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${Box1Image})` }}
              onClick={() => console.log('Box 1 clicked!')}
            ></div>

            {/* Box 2 in the bottom */}
            <div
              className="w-full h-64 mr-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${Box2Image})` }}
              onClick={() => console.log('Box 2 clicked!')}
            ></div>
          </div>

          {/* Section C (Right side with two boxes) */}
          <div className="w-1/3 flex flex-col items-end">
            {/* Add smaller margin between Section B and Section C */}
            <div className="mb-0"></div>

            {/* Box 3 in the top */}
            <div
              className="w-full h-64 mb-6 ml-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${Box3Image})` }}
              onClick={() => console.log('Box 3 clicked!')}
            ></div>

            {/* Box 4 in the bottom */}
            <div
              className="w-full h-64 mt-6 mr-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${Box4Image})` }}
              onClick={() => console.log('Box 4 clicked!')}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
