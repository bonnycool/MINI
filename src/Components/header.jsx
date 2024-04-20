import React from 'react';
import Header from '../Components/header';
import Box1Image from '../Assests/imagesroni/blockchain1.jpg';
import Box2Image from '../Assests/imagesroni/cyber1.jpg';
import Box3Image from '../Assests/imagesroni/opensource1.jpg';
import Box4Image from '../Assests/imagesroni/ai1.jpg';

const FourBoxesPage = () => {
    return (
        <div>
            {/* Include the header at the top */}
            <Header />

            {/* Container for the entire content */}
            <div className="flex justify-center mt-16" style={{ marginTop: '60px' /* Adjust the margin top based on header height */ }}>
                <div className="container flex flex-row">
                    {/* Section A (Left side for navigation bar) */}
                    <div className="w-1/4">
                        {/* Placeholder for navigation bar */}
                    </div>

                    {/* Section B (Middle section with two boxes) */}
                    <div className="w-1/3 flex flex-col mr-8 mt-16 items-center">
                        {/* Box 1 in the top */}
                        <button
                            className="w-full h-64 mb-4 bg-blue-500"
                            style={{ backgroundImage: `url(${Box1Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            onClick={() => console.log('Box 1 clicked!')}
                        ></button>

                        {/* Box 2 in the bottom */}
                        <button
                            className="w-full h-64 bg-green-500"
                            style={{ backgroundImage: `url(${Box2Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            onClick={() => console.log('Box 2 clicked!')}
                        ></button>
                    </div>

                    {/* Section C (Right side with two boxes) */}
                    <div className="w-1/3 flex flex-col mr-8 mt-14 items-end">
                        {/* Box 3 in the top */}
                        <button
                            className="w-full h-64 mb-4 bg-red-500"
                            style={{ backgroundImage: `url(${Box3Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            onClick={() => console.log('Box 3 clicked!')}
                        ></button>

                        {/* Box 4 in the bottom */}
                        <button
                            className="w-full h-64 bg-yellow-500"
                            style={{ backgroundImage: `url(${Box4Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            onClick={() => console.log('Box 4 clicked!')}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourBoxesPage;
