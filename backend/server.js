const express = require('express');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc } = require('firebase/firestore');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyAVt-PT18cT_Jzlx3zHs0Ng4TaykNdSd-s",
    authDomain: "gitsconnect-aa3f5.firebaseapp.com",
    projectId: "gitsconnect-aa3f5",
    storageBucket: "gitsconnect-aa3f5.appspot.com",
    messagingSenderId: "229347354180",
    appId: "1:229347354180:web:f520ed4f2baceaeccffe11",
    measurementId: "G-JQHTHQTJ76"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Initialize Firestore

// Middleware to parse JSON bodies
app.use(express.json());

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Query Firestore for the user document based on the username
        const userDoc = await getDoc(doc(db, 'usercredentials', 'login'));

        // Check if the document exists
        if (!userDoc.exists()) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const userData = userDoc.data();

        // Retrieve the password from the user document
        const storedPassword = userData.password;

        // Compare the entered password with the stored password
        if (password === storedPassword) {
            return res.json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
