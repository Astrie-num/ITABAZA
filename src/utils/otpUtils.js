const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Function to generate a random 4-digit OTP
const generateOTP = () => {
  return crypto.randomInt(1000, 9999).toString(); // 4-digit OTP
};

// Function to send OTP email
const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use any SMTP service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Registration",
    text: `Your OTP for registration is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully!");
  } catch (error) {
    console.error("Error sending OTP: ", error);
  }
};

module.exports = { generateOTP, sendOTPEmail };
