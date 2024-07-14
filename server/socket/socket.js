const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"]
    }
});

const getReciverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // {userId: socketId}

io.on('connection', (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") userSocketMap[userId] = socket.id;
    console.log(userId);

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

module.exports = { app, io, server, getReciverSocketId };
