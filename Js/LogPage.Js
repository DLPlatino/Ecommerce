var login_form = document.getElementById("Login")
var regis_form = document.getElementById("Register")
var indicator = document.getElementById("Indicator")

function registro(){
    login_form.style.transform = "translateX(0px)";
    regis_form.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login(){
    regis_form.style.transform = "translateX(300px)";
    login_form.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}
