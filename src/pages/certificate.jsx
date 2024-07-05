import React, { useState, useEffect } from 'react';
import Navbar from '../Components/navbar';
import UserHeader from '../Components/userheader';
import { db, auth } from '../../backend/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Certificates = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            if (user) {
                try {
                    const collections = ['aiattendance', 'blockattendance', 'openattendance', 'cyberattendance'];
                    let allData = [];

                    for (const col of collections) {
                        const attendanceCollection = collection(db, col);
                        const userQuery = query(attendanceCollection, where('uid', '==', user.uid));
                        const attendanceSnapshot = await getDocs(userQuery);
                        const attendanceData = attendanceSnapshot.docs.map(doc => ({
                            date: new Date(doc.data().date),  // Convert date string to Date object
                            eventName: doc.data().eventname,
                            id: doc.id
                        }));
                        allData = [...allData, ...attendanceData];
                    }

                    console.log('Fetched attendance data:', allData);
                    setAttendanceData(allData);
                } catch (error) {
                    console.error('Error fetching attendance data: ', error);
                }
            }
        };

        fetchAttendanceData();
    }, [user]);

    return (
        <div className="flex h-screen">
            <div className="w-1/5 h-full bg-gray-800 text-white p-4">
                <Navbar />
            </div>

            <div className="flex-1 h-full p-8 bg-gray-100 flex flex-col">
                <div className="p-4">
                    <UserHeader />
                </div>

                <div className="flex-1 mt-6 overflow-y-auto p-4">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-center">Event Name</th>
                                <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-center">Date</th>
                                <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm text-center">Download e-Certificate</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {attendanceData.map((item) => (
                                <tr key={item.id}>
                                    <td className="w-1/3 py-3 px-4 text-center">{item.eventName}</td>
                                    <td className="w-1/3 py-3 px-4 text-center">{item.date.toDateString()}</td>
                                    <td className="w-1/3 py-3 px-4 text-center">
                                        <a href={`/certificate/${item.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Download e-Certificate
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
