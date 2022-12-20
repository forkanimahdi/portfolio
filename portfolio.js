var digitCode = document.getElementById("digitcode")
const whatsapp = document.getElementById("whatsapp")
const whatsappcancel = document.getElementById("cancel")
const whatsappverify = document.getElementById("verify")
const whatsapparea = document.getElementById('requestwhatsapp')
const verificationcontainer = document.querySelector(".verificationcontainer")
const verificationdone = document.querySelector(".verificationdone")
const whatsappdone = document.getElementById("okdone")
const wrong = document.querySelector(".wrong")
const menucheckbox = document.getElementById("menucheckbox")
const closemenu = document.querySelector(".fa-xmark")
const mobilemenu = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")
const homelink = document.getElementById("homelink")
const aboutlink = document.getElementById("about")
const skillslink = document.getElementById("skill")
const portfoliolink = document.getElementById("portfolio")

let verification = 2000
whatsapp.addEventListener("click",() =>{
    whatsapparea.style.display = "initial"
})
whatsappcancel.addEventListener("click",() =>{
    whatsapparea.style.display = "none"
    digitCode.value = "";
    wrong.style.display = "none"

})
whatsappdone.addEventListener("click",() =>{
    whatsapparea.style.display = "none"
})
whatsappverify.addEventListener("click",() =>{
if(digitCode.value == verification){
    verificationcontainer.style.display = "none"
    verificationdone.style.display = "initial"
}
else{
wrong.style.display = "initial"
setTimeout(() => {
    wrong.style.display = "none"

}, 2000);
}
})
closemenu.style.display = 'none' 
menucheckbox.addEventListener("click",()=>{
    if (menucheckbox.checked) {
menu.style.left = "0"
mobilemenu.style.display = 'none' 
closemenu.style.display = 'initial' 

    }
    else{
        closemenu.style.display = 'none' 
        mobilemenu.style.display = 'initial' 
        menu.style.left = "-100%"

    }
})
const mql = window.matchMedia('(max-width: 425px)'); 
if (mql.matches) { 
homelink.addEventListener("click",()=>{
    menu.style.left="-100%"
            closemenu.style.display = 'none' 
        mobilemenu.style.display = 'initial' 
menucheckbox.checked=false
})
aboutlink.addEventListener("click",()=>{
    menu.style.left="-100%"
            closemenu.style.display = 'none' 
        mobilemenu.style.display = 'initial' 
menucheckbox.checked=false
})
skillslink.addEventListener("click",()=>{
    menu.style.left="-100%"
            closemenu.style.display = 'none' 
        mobilemenu.style.display = 'initial' 
menucheckbox.checked=false
})
portfoliolink.addEventListener("click",()=>{
    menu.style.left="-100%"
            closemenu.style.display = 'none' 
        mobilemenu.style.display = 'initial' 
menucheckbox.checked=false
})
} 
