const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport ({
    host:"smtp.gmail.com",
    post: 465,
    secure: true,
    auth:{
        user:"sendernovatech@gmail.com",
        pass:"ctkjgrlbosoeafxk",
     }
    });

const sendMail = (text) => {
    var mailoptions = {
        form: '"info" <sendernovatech@gmail.com>',
        to:    "niev.mauro@gmail.com",
        subject:"Enviado desde nodemailer",
        text,
    };

    transporter.sendMail(mailoptions, (error, info)=>{
        if (error){
            console.log(error);
         //   resizeBy.status(500).send(error.message);
        } else{
            console.log("email enviado");
           // resizeBy.status(200).jsonp(req.body)
        }
    });
}

module.exports = { sendMail }