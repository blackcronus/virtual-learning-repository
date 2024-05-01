const express = require('express');
const app = express();
const cors = require('cors');
const coursesRoutes = require('./routes/courses');
const authRoutes = require('./routes/auth-routes');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use('/api/courses', coursesRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 