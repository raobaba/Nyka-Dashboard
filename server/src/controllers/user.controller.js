const User = require("../models/user.model");
const cloudinary = require("cloudinary");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("body", req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(404)
        .json({ error: "A user with this email already exists." });
    }
    console.log(req.files);
    const myCloud = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath,
      {
        folder: "avatars",
        width: 150,
        crop: "scale",
      }
    );

    const newUser = new User({
      name,
      email,
      password,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await newUser.save();
    res
      .status(201)
      .json({
        message: "User created successfully",
        signup: true,
        user: newUser,
      });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found. Please check your email." });
    }

    if (user.password !== password) {
      return res
        .status(404)
        .json({ error: "Incorrect password. Please check your password." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logoutUser = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

module.exports = { createUser, loginUser, logoutUser };
