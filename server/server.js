const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world!")
});

// Import routes ---------------
const authRoutes = require('./routes/auth.routes.js');

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})