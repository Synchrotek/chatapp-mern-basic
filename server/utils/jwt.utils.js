const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    })

    return res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // ms
        httpOnly: true, // prevent XSS attacks
        sameSite: "strict", // prevents CSRF attacks
        // secure: process.env.NODE_ENV !== "development",
        secure: false,
    });
};

module.exports = {
    generateTokenAndSetCookie
};