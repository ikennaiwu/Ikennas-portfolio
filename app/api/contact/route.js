import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: "piusiwu1@gmail.com", // your email
    subject: `New message from ${name}`,
    text: message,
  });

  return new Response(JSON.stringify({ message: "Message sent!" }), {
    status: 200,
  });
}