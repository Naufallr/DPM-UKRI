function emailSend(){

    var userName = document.getElementById ('name'). value;
    var email = document.getElementById ('email') . value;
    var message = document.getElementById ('message') . value;

    var messageBody = "Name" + userName +
    "<br/> email" + email +
    "<br/> message" + message;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vlinetzgt@gmail.com",
    Password : "651FE711F797C1AD5AD17D1EE96C0B0D5464",
    To : 'dpmukri@gmaill.com',
    From : "vlinetzgt@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => alert(message)
);
}