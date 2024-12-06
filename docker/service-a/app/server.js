const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

// PostgreSQL connection
const pool = new Pool({
    host: 'service-d',
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'mydb',
    port: 5432
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Service A (Application Server)');
});

app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('Internal server error');
    }
});

// Health Check
app.get('/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');
        res.send('OK');
    } catch (err) {
        res.status(500).send('Database connection failed');
    }
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Shutting down gracefully...');
    await pool.end();
    process.exit(0);
});

// Start server
app.listen(PORT, () => {
    console.log(`Service A is running on http://localhost:${PORT}`);
});
