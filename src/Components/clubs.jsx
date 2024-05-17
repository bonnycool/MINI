import React from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const ClubList = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleJoinClub = async (clubId) => {
    if (!user) {
      console.log('User not authenticated');
      return;
    }

    try {
      // Fetch user profile data
      const userData = await getUserData(user.uid); // Implement this function to fetch user profile data based on UID

      // Add user to the club in the database
      addUserToClub(clubId, userData); // Implement this function to add user to the club
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Club List</h1>
      <button onClick={() => handleJoinClub('club1')} className="block p-2 hover:bg-blue-800 rounded mb-4">Join Club 1</button>
      <button onClick={() => handleJoinClub('club2')} className="block p-2 hover:bg-blue-800 rounded mb-4">Join Club 2</button>
      {/* Add more clubs here */}
    </div>
  );
};

export default ClubList;
