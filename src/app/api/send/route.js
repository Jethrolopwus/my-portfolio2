// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST({request:REQUEST}) {
  const {body} = await request.json();

  const {email, subject, message} = body;
    // console.log({email, subject, message});
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["exceljethro92@gmail.com", email],
      subject: subject,
      react:(
        <>
        <h1>{message}</h1>
        <p>Thank You for contacting us!</p>
        <p>New message submitted!</p>
        <p>{message}</p>
        </>
      ), 
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
