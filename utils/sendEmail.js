const { log } = require("console");
const nodemailer= require("nodemailer");
const send = require("send");

const sendEmail= async(to, messageContent)=>{
    try{
        //create transporter
        const transporter= nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: force,
            auth: {
                user: 'your Email ID',
                pass: 'custom app password',
            }
        })
        //message obj
        const message={
            to,
            Subject: "New Messaage",
            html: `
            <h3>You have Received a new msg</h3>
            <p>${messageContent}</p>
            `,
        };

        //send the email
        const info= await transporter.sendMail(message);
        console.log('message send', info.messageId);
    }catch(err){
        console.log(err);
        throw new Error("Email could not be sent");
    }
};


module.exports=sendEmail;