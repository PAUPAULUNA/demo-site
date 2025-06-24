// server/server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Using promise-based API for async/await

const app = express();

const port = process.env.PORT || 5000; // Use port from environment variable or default to 5000

// Middleware
app.use(cors()); // Enable CORS for asll routes
app.use(express.json()); // Parse JSON request bodies

// Database Connection Pool (recommended for production)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test Database Connection
pool.getConnection()
    .then(connection => {
        console.log('Successfully connected to MySQL database!');
        connection.release(); // Release the connection
    })
    .catch(err => {
        console.error('Error connecting to database:', err.message); // <-- CHANGE THIS LINE
        // Optionally exit the process if database connection is critical
        process.exit(1);
    });

// Basic API Route
app.get('/', (req, res) => {
    res.send('Hello from the back-end API!');
});

// Example API to fetch data (will connect to MySQL later)
app.get('/api/items', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM items'); // Replace 'items' with your table name
        res.json(rows);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Error fetching items' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});