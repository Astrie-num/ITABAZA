require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateOTP, sendOTPEmail } = require("../utils/otpUtils");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// Register user and send OTP
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Normalize the email (convert to lowercase)
    const normalizedEmail = email.toLowerCase();

    // Check if user already exists with the normalized email
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email: normalizedEmail, password: hashedPassword });
    const savedUser = await newUser.save();

    // Generate OTP
    const otp = generateOTP();
    const otpExpiration = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    // Save OTP and expiration in the user document
    savedUser.otp = otp;
    savedUser.otpExpiration = otpExpiration;
    await savedUser.save();

    // Send OTP to user's email
    await sendOTPEmail(normalizedEmail, otp);

    res.status(201).json({
      success: true,
      message: "User registered successfully. Please check your email for OTP.",
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verify OTP and log the user in
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const normalizedEmail = email.toLowerCase();  // Normalize email to lowercase

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found!" });
    }

    // Check if OTP is correct and not expired
    if (user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP!" });
    }

    if (new Date() > user.otpExpiration) {
      return res.status(400).json({ success: false, message: "OTP has expired!" });
    }

    console.log("Otp verified successfully")

    // OTP is valid, login the user (in real-world scenario, issue a JWT here)
    res.status(200).json({ success: true, message: "OTP verified successfully. User logged in!" });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to send password reset email
const sendPasswordResetEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email exists in the database
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ success: false, message: "Email not found!" });
    }

    // Generate reset token and expiration
    const resetToken = crypto.randomBytes(32).toString("hex"); // Random token
    const resetTokenExpiration = new Date(Date.now() + 60 * 60 * 1000); // Token valid for 1 hour

    // Save token and expiration to the user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = resetTokenExpiration;
    await user.save();

    // Generate a reset URL
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the reset email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      text: `Hello ${user.username},\n\nYou requested a password reset. Click the link below to reset your password:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Password reset email sent! Please check your inbox.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Find the user with the matching token and ensure it's not expired
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: new Date() }, // Ensure token is still valid
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired reset token!" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear the reset token/expiration
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();

    res.status(200).json({ success: true, message: "Password reset successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Normalize email
    const normalizedEmail = email.toLowerCase();

    // Check if the user exists
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found!" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials!" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Store your secret key in .env
      { expiresIn: "1h" } // Token valid for 1 hour
    );

    res.status(200).json({
      success: true,
      message: "Login successful!",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, verifyOTP, sendPasswordResetEmail, resetPassword, loginUser };
