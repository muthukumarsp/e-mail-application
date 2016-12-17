import {Router, Response, Request} from 'express';
import * as uuid from 'node-uuid';

const emailRouter: Router = Router();

let nodemailer = require('nodemailer');
let mg = require('nodemailer-mailgun-transport');
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
let auth = {
    auth: {
        api_key: 'key-82edc8e25186d9268d4009a6376bbb38',
        domain: 'muthu-maildomain.com'
    }
};

// Sendgrid implementation. Used when mailgun fails
let sgTransport = require('nodemailer-sendgrid-transport');

let sendGridOptions = {
    auth: {
        api_key: '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'
    }
};

let sendGridMailer = nodemailer.createTransport(sgTransport(sendGridOptions));

let nodemailerMailgun = nodemailer.createTransport(mg(auth));

emailRouter.post('/', (request: Request, response: Response) => {

    console.log('CC address', request.body);
    let email: IEmail = {
        to: request.body.toField,
        from: 'muthukumarsp@muthu-maildomain.com',
        subject: request.body.subject,
        text: 'Awesome sauce',
        html: '<b>HTML Contents also supported</b> <br/> <pre>' + request.body.emailBodyText + '</pre>',
        'h:Reply-To': 'muthukumarsp@gmail.com',
    };
    if (request.body.ccField) {
        email.cc = request.body.ccField;
    }
    if (request.body.bccField) {
        email.bcc = request.body.bccField;
    }
    // Uncomment the following line to  Test sendgrid
    // sendBySendGridMailer(email, response);
    console.log('request', JSON.stringify(request.body.emailBodyText));
    nodemailerMailgun.sendMail(email, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
            sendBySendGridMailer(email, response);
        }
        else {
            console.log('Response: ' + info);
            response.status(200).json({id: uuid.v4(), sendStatus: 'success'});
        }
    });

});

function sendBySendGridMailer(email: any, response: Response) {

    email.html += '<b> Send using sendGrid </b>';
    sendGridMailer.sendMail(email, function (err, res) {
        if (err) {
            console.log(err);
            response.status(500).json({id: uuid.v4(), sendStatus: 'failed'});
        }
        console.log(res);
        response.status(200).json({id: uuid.v4(), sendStatus: 'success'});
    });
}

export {emailRouter}

interface IEmail {
    to: string;
    from: string,
    cc?: string;
    bcc?: string;
    subject: string;
    html?: string;
    text: string;
    'h:Reply-To'?: string;

}