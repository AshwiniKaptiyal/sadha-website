import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, subject, date, location, guests, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // ✅ 1. Admin ko mail
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: subject || "New Contact Form",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Guests:</b> ${guests}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // ✅ 2. User ko acknowledgment mail
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "We received your enquiry ✅",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting us 🙏</p>
        <p>We have received your enquiry and will get back to you soon.</p>

        <br/>

        <h4>Your Details:</h4>
        <p><b>Date:</b> ${date}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Guests:</b> ${guests}</p>

        <br/>
        <p>— Team Sadha Video</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}