const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/announcements', require('./routes/announcement'));
app.use('/api/auth', require('./routes/auth'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
