const express = require("express");
const { registerUser, verifyOTP, sendPasswordResetEmail, resetPassword, loginUser } = require("../controllers/authController");

const router = express.Router();
// Register new user and send OTP
router.post("/register", registerUser);

// Verify OTP
router.post("/verify-otp", verifyOTP);
// Route to send password reset email
router.post("/forgot-password", sendPasswordResetEmail);

// Route to reset password using the token
router.post("/reset-password", resetPassword);

//Route to login user
router.post("/login", loginUser);

module.exports = router;
