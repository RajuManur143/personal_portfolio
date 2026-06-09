const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use(express.json({ limit: "10kb" }));

// Rate limiting for email endpoint
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: "Too many email requests, please try again later.",
});

// Static files
app.use("/static", express.static(path.join(__dirname, "static"), { maxAge: "1d" }));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "index.html"), {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
});

app.post("/sendemail/", emailLimiter, async (req, res) => {
  try {
    const { name, Subject: subject, _replyto: email, message } = req.body;

    // Input validation
    if (!name || !subject || !email || !message) {
      return res.status(400).redirect("/?error=missing_fields");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).redirect("/?error=invalid_email");
    }

    // Sanitize inputs
    const sanitizedName = String(name).trim().substring(0, 100);
    const sanitizedSubject = String(subject).trim().substring(0, 200);
    const sanitizedEmail = String(email).trim().toLowerCase();
    const sanitizedMessage = String(message).trim().substring(0, 5000);

    const yourEmail = process.env.EMAIL_USER;
    const yourPassword = process.env.EMAIL_PASS;

    if (!yourEmail || !yourPassword) {
      return res.status(500).redirect("/?error=config_error");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: yourEmail,
        pass: yourPassword,
      },
    });

    const mailOptions = {
      from: yourEmail,
      to: yourEmail,
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
      `,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
    };

    await transporter.sendMail(mailOptions);
    return res.redirect("/?success=true");
  } catch (error) {
    console.error("Email error:", error.message);
    return res.status(500).redirect("/?error=send_failed");
  }
});

// Health check endpoint for Vercel
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "templates", "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).redirect("/?error=server_error");
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on port ${PORT}`);
});
