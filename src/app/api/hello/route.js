import sendEmail from "@/utils/mailer"

 
export async function POST(request) {
 try {
  const body = await request.json()
  const {subject, message, email}= body
  const html = ` 
  <html>
    <head>
      <style>
        body {
          background: linear-gradient(to bottom, blue, red, yellow);
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        h1 {
          color: #333;
        }
        p {
          color: #555;
        }
      </style>
    </head>
  <body>
  <div class="container">
    <h1>From: ${email}</h1>
    <p>Dear Jethro,</p>
    <p>${message}</p>
    <p>Thank you!</p>
  </div> 
</body>
</html>
`;
  await sendEmail(message, html, subject) 
  return new Response(JSON.stringify({message: 'success'}),{
    status: 200,
  })
 } catch (error) {
//  console.log(error) 
  return new Response(JSON.stringify('failed'),{
    status: 500
  })
 }
}