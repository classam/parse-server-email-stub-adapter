/*
 * Parse Server needs an 'email adapter', but we want to keep it as stupid and simple as possible,
 * so it's just a function that takes, as an option, a function, and then uses that.
 */

module.exports=function(options){
    return {
        sendMail: options.sendEmail
    }
};