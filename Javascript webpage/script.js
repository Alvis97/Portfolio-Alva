 // send email from the form
 function sendMail() {
    var name=document.querySelector("#fname").value;

    var params = {
    fname: document.querySelector('#fname').value,
    email: document.querySelector("#mail").value,
    subject: document.querySelector('.text-box').value,
    message: document.querySelector("#message").value
 };

    emailjs.send( "service_p22liss", "template_o0bded8", params).then(function (res){
    alert("Thanks, " + name + " for yor email!"   + " I will answear as soon as I can. :)");
    });

 }