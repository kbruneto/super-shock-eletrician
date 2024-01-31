
const forms = document.querySelector(".form-pop-up")
const formsmask = document.querySelector(".mask-form")

function clickbutton(){
    forms.style.left = "50%"
    forms.style.transform = "translateX(-50%)"
    formsmask.style.visibility = "visible"
}

const hiddenforms = document.getElementsByClassName(".close-pop-up")

function clicktoclose(){
    forms.style.left = "-450px"
    forms.style.transform = "none"
    formsmask.style.visibility = "hidden"
}

const services = document.querySelector(".services-form")

function clickservices(){
    services.style.left = "50%"
    services.style.transform = "translateX(-50%)"
    formsmask.style.visibility = "visible"
}

const serviceshidden = document.getElementsByClassName(".services-close")

function closeservices(){
    services.style.left = "-450px"
    forms.style.transform = "none"
    formsmask.style.visibility = "hidden"
}