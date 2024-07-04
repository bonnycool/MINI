import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../backend/firebase';
import { doc, getDoc } from 'firebase/firestore';
import certificateImage from '../pages/e-certificate.jpg'; // Adjust the path based on the actual location within src

const CertificateGenerator = () => {
    const { id } = useParams();
    const [certificateData, setCertificateData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCertificateData = async () => {
            try {
                const docRef = doc(db, 'aiattendance', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCertificateData(docSnap.data());
                } else {
                    console.error('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertificateData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!certificateData) {
        return <div>Error loading certificate data.</div>;
    }

    const eventDate = new Date(certificateData.date);

    return (
        <div className="flex flex-col items-center mt-6">
            <div className="relative w-full max-w-4xl">
                <img 
                    src={certificateImage} // Use the imported image
                    alt="Certificate Template" 
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black w-4/5 mx-auto">
                    <h2 className="mt-2 text-2xl font-semibold">{certificateData.name || 'Participant'}</h2>
                    <p className="mt-4 text-xl">has attended the event</p>
                    <h3 className="mt-2 text-xl font-medium">{certificateData.eventname || 'Event'}</h3>
                    <p className="mt-4 text-xl">{!isNaN(eventDate) ? `on ${eventDate.toDateString()}` : 'Date not available'}</p>
                </div>
            </div>
            <button 
                onClick={() => window.print()} 
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Print Certificate
            </button>
        </div>
    );
};

export default CertificateGenerator;
