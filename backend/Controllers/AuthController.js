const UserModel = require("../Models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = "secret-123"; 

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists, you can login', success: false });
        }
        
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        
        res.status(201).json({ message: "Signup successfully", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed, email or password is wrong';
        
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            JWT_SECRET, 
            { expiresIn: '24h' }
        );
        
        res.status(201).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name,
            userId: user._id
        });
    } catch (err) {
        console.error("Error during login:", err); 
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

module.exports = {
    signup,
    login
};
