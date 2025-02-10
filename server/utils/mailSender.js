const nodemailer = require("nodemailer");
require("dotenv").config()
const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                service:'Gmail',
                host:process.env.MAIL_HOST,
                 //add certification
                 port: 465,
                 secure: true,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: 'StudyTech || Krashna Patel',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error);
        //throw right error
        throw error;
    }
}


module.exports = mailSender;