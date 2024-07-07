const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');
const { generateTokenAndSetCookie } = require('../utils/jwt.utils.js')

exports.Singup = async (req, res) => {
    try {
        const {
            fullName, email, password, confirmPassword, gender
        } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                error: "Password don't match"
            })
        }

        // check if user already exists ------
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                error: "Email already in Use."
            })
        }

        // HASH PASSWORD HER-------------------
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt);

        // AVATAR PLACEHOLDERS ----------------
        const boyProfilePic = `${process.env.PROFILE_PIC_API}/boy?username=${email}`
        const girlProfilePic = `${process.env.PROFILE_PIC_API}/girl?username=${email}`

        const newUser = new User({
            fullName, email,
            password: hasedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        if (!newUser) {
            return res.status(400).json({
                success: false,
                error: "Invalid User data."
            })
        }
        // generate JWT token -----------------
        await generateTokenAndSetCookie(newUser._id, res);

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            }
        })
    } catch (error) {
        console.error("Error in signup controller: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server Error."
        })
    }
};

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                error: "Invalid Email or Password."
            })
        }
        // generate JWT token -----------------\
        generateTokenAndSetCookie(user._id, res);
        return res.status(201).json({
            success: true,
            message: "User Login successful",
            data: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                profilePic: user.profilePic,
            }
        })
    } catch (error) {
        console.error("Error in login controller: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server Error."
        })
    }
};

exports.Logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({
            success: true,
            message: "User Logout successful",
        })
    } catch (error) {
        console.error("Error in logout controller: ", error);
        res.status(500).json({
            success: false,
            error: "Internal server Error."
        })
    }
};
