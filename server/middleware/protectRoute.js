const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized - No token Provided"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                error: "Unauthorized - Invalid token"
            });
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "User not found"
            });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal server error."
        })
    }
}

module.exports = protectRoute;