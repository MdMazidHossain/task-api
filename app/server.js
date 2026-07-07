const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 📌 Middleware
app.use(cors());              // CORS Enable করে
app.use(express.json());      // JSON পার্স করে

// 📌 Database Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskdb';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB Connected!'))
    .catch(err => console.error('❌ MongoDB Error:', err.message));

// 📌 Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// 📌 Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// 📌 Root Route
app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API', status: 'running' });
});

// 📌 Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
