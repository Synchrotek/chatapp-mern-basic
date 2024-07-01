const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();
const { connectToMongoDB } = require('./db/connectToDb.js');

const app = express();

// Middlewares -----------------
app.use(express.json());
app.use(cookieParser());

// Use routes ------------------
const authRoutes = require('./routes/auth.routes.js');
const messageRoutes = require('./routes/message.routes.js');
const userRoutes = require('./routes/user.routes.js');
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Hello world!")
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on PORT: ${PORT}`);
})