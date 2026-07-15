
const nodemailer = require("nodemailer");

const sendOtpEmail = async (email, otp) => {
  transporter.verify((error, success) => {
  if (error) {
   alert("SMTP Error:", error);
  } else {
    alert("SMTP Connected Successfully");
  }
});

const transporter = nodemailer.createTransport({
  
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
}

);

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    html: `
      <h2>OTP Verification</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP will expire in 5 minutes.</p>
    `
  });
};

module.exports = sendOtpEmail;