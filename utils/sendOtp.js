const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOtpEmail = async (email, otp) => {
    try {
        // Verify SMTP connection
        await transporter.verify();
        console.log("✅ SMTP Connected");

        const info = await transporter.sendMail({
            from: `"Hridaya" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your OTP Verification Code",
            html: `
                <h2>OTP Verification</h2>

                <p>Your OTP is:</p>

                <h1>${otp}</h1>

                <p>This OTP will expire in 5 minutes.</p>
            `,
        });

        console.log("✅ Email sent:", info.messageId);

        return true;

    } catch (err) {
        console.error("❌ EMAIL ERROR:", err);
        throw err;
    }
};

module.exports = sendOtpEmail;