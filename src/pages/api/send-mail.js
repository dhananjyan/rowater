// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import config from '@/config';
import nodemailer from 'nodemailer';
import databaseMiddleware from '@/middleware/database';
import EnqueryService from "@/service/Enquiry.service";

async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message } = req.body;
    EnqueryService.create({
      name,
      email,
      mobileNumber: phoneNumber,
      message,
    })
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: config.gmail.user,
          pass: config.gmail.pass,
        },
      });

      const mailOptions = {
        from: 'Vinayagaengineeringro@gmail.com',
        to: config.gmail.email,
        subject: "Request for Callback",
        text:
          `Hi,\nBelow customer is requested for a callback

Name: ${name}
Email: ${email}
Phone: ${phoneNumber}
message: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log("Error", error)
      return res.status(500).json({ message: 'Error sending email' });
    }

  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default databaseMiddleware(handler);
