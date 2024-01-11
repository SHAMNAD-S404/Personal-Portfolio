
function sendEmail(){
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "shamnadsweetheart@gmail.com",
  Password : "7E007C2816AC549273372A6A749009F8C3C4",
  To : 'shamnadsakeer306@gmail.com',
  From : "shamnadsweetheart@gmail.com",
  Subject : "New contact form enquiry",
  Body : "Name: "+document.getElementById("c_name").value
        +"<br> Email id: "+document.getElementById("c_mail").value 
        +"<br> Message: "+document.getElementById("Message1").value 

}).then(
message => alert(message)
);

}



