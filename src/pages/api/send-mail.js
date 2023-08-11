// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import config from '@/config';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the POST request here
    const { name, email, phoneNumber, message } = req.body; // Assuming JSON data
    // Process the data and save it to a database or perform other actions
    // Example: You might use a database like MongoDB or PostgreSQL

    try {
      // Create a transporter using SMTP
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: config.gmail.user,
          pass: config.gmail.pass,
        },
      });

      // Email content
      const mailOptions = {
        from: 'Vinayagaengineeringro@gmail.com',
        to: config.gmail.email,
        subject: "Request for Callback",
        text:
          `Hi, 

Below customer is requested for a callback

Name: ${name}
Email: ${email}
Phone: ${phoneNumber}
message: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log("Error", error)
      res.status(500).json({ message: 'Error sending email' });
    }

    res.status(201).json({ message: 'Post created successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
