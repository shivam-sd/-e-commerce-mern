const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {validationResult} = require("express-validator");

const UserRegister = async (req, res) => {
  const { fullname, email, password } = req.body;
  // apply valdation 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ errors: "User Allready exist" });
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const user = await UserModel.create({
          fulname: fullname,
          email: email,
          password: hash,
        });
        return res
          .status(201)
          .json({ message: "User Created Successfully", user });
      });
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ errors: "error in User Creating", error });
  }
};


const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "First Login." });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({userId: user._id }, process.env.SECRET_KEY, { expiresIn: "7d" });

    // Set cookie with correct options
    const tokenOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" // Secure only in production
    };

    res.cookie("token", token, tokenOption);
    
    return res.status(200).json({
      message: "Login Successful",
      success: true,
      data: user,
      token: token
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error in User Login" });
  }
};



module.exports = {
  UserRegister,
  UserLogin,
};
