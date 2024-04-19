import  nodemailer from "nodemailer";
// console.log(process.env.MAILER_PASSWORD);

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.zoho.com",
  from: "info@bluehouseng.com",
  secure: true,
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log({
      success: success,
      message: "mail server is ready for your messages",
    });
  }
});

async function sendEmail(
  text,
  html,
  subject
){
  try {
    const mailOptions   = {
      from: '"My Portfolio" <info@bluehouseng.com>',
      to: `${process.env.MY_EMAIL}`,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendEmail;