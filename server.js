

var http = require("http");
var nodemailer = require("nodemailer");


function onRequest(mainRequest, mainResponse) {

// create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport('SMTP', {
        host: 'mail.gmail.com',
        secureConnection: false,
        port: 587,
        auth: {
            user: 'petka777794@gmail.com',
            pass: '28032004l'
        }
    });

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: "petka777794@gmail.com", // sender address
        to: "petka777794@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world ", // plaintext body
        html: "<b>Hello world </b>" // html body
    };

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            mainResponse.writeHead(500, {"Content-Type": "text/plain"});
            mainResponse.write('Чето не отправилось');
            mainResponse.end();

        } else {
            console.log("Message sent: " + response.message);
            mainResponse.writeHead(200, {"Content-Type": "text/plain"});
            mainResponse.write('Hello World');
            mainResponse.end();
        }
    })

};

http.createServer(onRequest).listen(8888);

/**
 * Created by Администратор on 16.01.2015.
 */
