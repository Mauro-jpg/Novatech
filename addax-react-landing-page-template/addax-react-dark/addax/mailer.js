const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
        // Update sendgrid API here
        api_key: '...'
    }
}))

const send = ({ name, email, phone, text }) => {

    const textBody = `Name: ${name}   
                Email: ${email}
                Phone: ${phone}
                Body: ${text}
                This email came from Addax React.js & Express.js template
                `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const message = {
        from,
        // Update the email here
        to: 'example@gmail.com',
        subject: 'New Email From Addax',
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send