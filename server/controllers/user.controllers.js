const User = require('../models/user.model.js');

exports.getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId }
        }).select("-password");
        res.status(200).json({
            success: true,
            message: "Users Fetched",
            data: filteredUsers
        })

    } catch (error) {
        console.error("Error in sendMessage controller: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server Error."
        })
    }
}