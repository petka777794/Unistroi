'use strict';

/**
 * @ngdoc function
 * @name unibuildApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unibuildApp
 */
angular.module('unibuildApp')
    .controller('ContactCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];



        $scope.send = function() {
            alert('hello');

            var nodemailer = require("nodemailer");

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
            }

// send mail with defined transport object
            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                }else{
                    console.log("Message sent: " + response.message);
                }

                // if you don't want to use this transport object anymore, uncomment following line
                //smtpTransport.close(); // shut down the connection pool, no more messages
            });

        }
    });