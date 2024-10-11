const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 

app.post('/send', async (req, res) => {
    const { fullName, emailAddress } = req.body;

    if (!fullName || !emailAddress) {
        return res.status(400).send('All fields are required.');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: '', 
            pass: ''
        }
    });

    const mailOptions = {
        from: emailAddress,
        to: '', 
        subject: 'New Contact Form Submission',
        text: `You have received a new message from ${fullName} (${emailAddress}):\n\n`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully.');
    } catch (error) {
        console.error('Error sending emailAddress:', error);
        res.status(500).send('Error sending message. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
