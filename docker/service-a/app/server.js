const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Service A (Application Server)');
});

app.get('/data', (req, res) => {
    res.json({ message: 'Hello from Service A!' });
});

app.listen(PORT, () => {
    console.log(`Service A is running on http://localhost:${PORT}`);
});
