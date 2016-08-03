# parse-server-email-stub-adapter
Used to send Parse Server password reset and email verification emails with...
an arbitrary function that you pass in.

The function should look like this:

    var sendMail = function(mail){
        return new Promise(function(resolve, reject)){
            console.log(mail.to);
            console.log(mail.subject);
            console.log(mail.text);
            resolve();
        }
    }

