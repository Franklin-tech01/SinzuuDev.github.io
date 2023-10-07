const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const corsOptions = {
    origin: 'http://127.0.0.1:5502', // Replace with your frontend's URL
    methods: 'POST',
};

app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    // Extract data from the request body
    const { name, email, message } = req.body;

    // Nodemailer configuration
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Replace with your Gmail email address
            pass: process.env.EMAIL_PASS, // Replace with your Gmail app password
        }
    });

    let mailOptions = {
        from: 'franklinmike2021@gmail.com',
        to: 'franklinmke2021@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred: ' + error.message);
            res.status(500).send({ success: false, message: 'Internal Server Error' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({ success: true, message: 'Email sent successfully' });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
