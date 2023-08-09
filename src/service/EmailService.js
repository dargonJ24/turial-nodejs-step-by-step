import nodemailer from 'nodemailer'
export const sendEmailService=async(email)=>{
   let transporter= nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: process.env.EMAIL_UERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    let info = await transporter.sendMail({
        from: 'evanhunggia@gmail.com',
        to: email,
        subject: 'Message',
        text: 'I hope this message gets read!',
        attachments:[
            {
                filename:"v.jpg",
                path:"src/public/images/d1.jpg"
            }
        ]
    });
    return info
}