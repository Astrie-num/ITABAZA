const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Unique constraint on email
  password: { type: String, required: true },
  otp: { type: String },
  otpExpiration: { type: Date },
  resetToken: { type: String }, // Token for password reset
  resetTokenExpiration: { type: Date }, // Expiration time for the reset token
});

const User = mongoose.model("User", userSchema);

module.exports = User;
