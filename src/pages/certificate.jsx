import React, { useState, useEffect } from 'react';
import Navbar from '../Components/navbar';
import UserHeader from '../Components/userheader';
import { db } from '../../backend/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Certificates = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const attendanceCollection = collection(db, 'aiattendance');
                const attendanceSnapshot = await getDocs(attendanceCollection);
                const attendanceData = attendanceSnapshot.docs.map(doc => ({
                    date: new Date(doc.data().date),  // Convert date string to Date object
                    eventName: doc.data().eventname,
                    id: doc.id
                }));

                console.log('Fetched attendance data:', attendanceData);
                setAttendanceData(attendanceData);
            } catch (error) {
                console.error('Error fetching attendance data: ', error);
            }
        };

        fetchAttendanceData();
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/5 h-full bg-gray-800 text-white p-4">
                <Navbar />
            </div>

            <div className="flex-1 h-full p-4 md:p-8 bg-gray-100 flex flex-col">
                <div className="mb-4 md:mb-20">
                    <UserHeader />
                </div>

                <div className="flex-1 overflow-y-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-2 px-4 md:py-3 md:px-4 uppercase font-semibold text-xs md:text-sm text-center">Event Name</th>
                                <th className="py-2 px-4 md:py-3 md:px-4 uppercase font-semibold text-xs md:text-sm text-center">Date</th>
                                <th className="py-2 px-4 md:py-3 md:px-4 uppercase font-semibold text-xs md:text-sm text-center">Download e-Certificate</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {attendanceData.map((item) => (
                                <tr key={item.id} className="border-t">
                                    <td className="py-2 px-4 md:py-3 md:px-4 text-center text-sm md:text-base">{item.eventName}</td>
                                    <td className="py-2 px-4 md:py-3 md:px-4 text-center text-sm md:text-base">{item.date.toDateString()}</td>
                                    <td className="py-2 px-4 md:py-3 md:px-4 text-center text-sm md:text-base">
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
