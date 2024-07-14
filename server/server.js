const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const { connectToMongoDB } = require('./db/connectToDb.js');
const { app, server } = require('./socket/socket.js');

// Middlewares -----------------
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

// Use routes ------------------
const authRoutes = require('./routes/auth.routes.js');
const messageRoutes = require('./routes/message.routes.js');
const userRoutes = require('./routes/user.routes.js');
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Server is working!");
});

const PORT = process.env.PORT || 4500;
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on PORT: ${PORT}`);
})