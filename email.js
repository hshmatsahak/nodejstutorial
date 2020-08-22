var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hshmatsahak@gmail.com',
        pass: 'YonkoKaido'
    }
});

var mailOptions = {
    from: 'hshmatsahak@gmail.com',
    to: 'hshmat.sahak@mail.utoronto.ca',
    subject: 'Sending Email using Node.js',
    text: 'That was easy'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } else{
        console.log('Email sent: ' + info.response);
    }
})