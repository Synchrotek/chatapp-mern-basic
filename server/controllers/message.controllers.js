const Conversation = require('../models/conversation.model.js');
const Message = require('../models/message.model.js');
const { io, getReciverSocketId } = require('../socket/socket.js');

exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        const receiverSocketId = getReciverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: newMessage,
        });
    } catch (error) {
        console.error("Error in sendMessage controller: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server Error."
        })
    }
}

exports.getMessages = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate("messages");
        if (!conversation) {
            return res.status(200).json({
                success: true,
                message: "No mwssages found",
                data: [],
            })
        }

        res.status(200).json({
            success: true,
            message: "Messages fetched successfully",
            data: conversation.messages,
        })
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
}