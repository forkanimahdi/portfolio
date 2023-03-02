const body = document.body
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
const darkmode = document.getElementById("darkmode")
const sun = document.querySelector(".fa-sun")
const moon = document.querySelector(".fa-moon")
const header = document.querySelector(".header")
const contactme = document.getElementById("contactme")
const blackhomelogo = document.querySelector(".blackhomelogo")
const headerblacklogo = document.querySelector(".black-img_logo")
const homelogo = document.querySelector(".homelogo")
const headerlogo = document.querySelector(".img_logo")
const home = document.getElementById("home")
const headerlinks = document.querySelectorAll(".headerlink")
const textLogo = document.querySelector('.text_logo')
const myname = document.querySelector(".myname")
const homeicones = home.querySelectorAll("i")
const contacticones = contactme.querySelectorAll("i")
const cv = document.querySelector(".cv")
const about = document.getElementById("aboutme")
const abmtittle = document.querySelector('.abmtittle')
const whoamitittle = document.querySelector('.whoamitittle')
const aboutmetext = document.querySelector('.aboutmetext')
const aboutmetextlinks = about.querySelectorAll("a")
const skills = document.getElementById("skills")
const skilltitle = document.querySelector('.skilltitle')
const skillcontainers = skills.querySelectorAll("#skillcontainer")
const skillprcntgs = skills.querySelectorAll("#skillprcntg")
const myportfolio = document.getElementById("myportfolio")
const portfoliotitle = document.querySelector('.portfoliotitle')
const portfoliocontainers = myportfolio.querySelectorAll("#work")
const portfoliocontainersdetaills = myportfolio.querySelectorAll(".detaills")
const detaillslinkgithub = myportfolio.querySelectorAll(".githubcode")
const detaillslinklive = myportfolio.querySelectorAll(".livecode")



let verification = 2000

closemenu.style.display = 'none' 
function localdark(){
let darkmodechecker = window.localStorage.getItem("darkmode")


thedarkmode()
}
localdark()
// whatsapp checker
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
function thedarkmode(){
   if(darkmode.checked){
sun.style.display = 'none'
moon.style.display = 'initial'
body.style.backgroundColor = 'rgb(230, 230, 230)'
header.style.backgroundColor = 'rgb(230, 230, 230)'
header.style.borderColor = '#580202'
contactme.style.backgroundColor = 'rgb(230, 230, 230)'
contactme.style.borderColor = '#580202'
blackhomelogo.style.display = 'initial'
homelogo.style.display = 'none'
headerblacklogo.style.display = 'initial'
headerlogo.style.display = 'none'
home.style.color = 'black'
home.style.borderBottomColor = '#580202'
myname.style.color = '#580202'
myname.style.fontWeight = '600'
headerlinks.forEach((headerlink) =>{
    headerlink.style.color = '#580202'
    headerlink.style.fontWeight = '600'
    headerlink .style.borderColor = '#580202'


})

homeicones.forEach((homeicone) =>{
    homeicone.style.color = '#580202'

})
contacticones.forEach((contacticone) =>{
    contacticone.style.color = '#580202'

})
aboutmetextlinks.forEach((aboutmetextlink) =>{
    aboutmetextlink.style.color = '#580202'
    aboutmetextlink.style.fontWeight = '600'

})
skillcontainers.forEach((skillcontainer) =>{
    skillcontainer.style.borderColor = 'orangered'
    skillcontainer.style.backgroundColor = '#580202'

  
})
skillprcntgs.forEach((skillprcntg) =>{
    skillprcntg.style.backgroundColor = 'orangered'
  
})
portfoliocontainers.forEach((portfoliocontainer) =>{
    portfoliocontainer.style.borderColor = 'orangered'
    portfoliocontainer.style.backgroundColor = '#580202'

  
})
portfoliocontainersdetaills.forEach((portfoliocontainerdetaill) =>{
    portfoliocontainerdetaill.style.color = ''
    portfoliocontainerdetaill.style.backgroundColor = '#580202'

  
})
detaillslinkgithub.forEach((detailllinkgithub) =>{
    detailllinkgithub.style.color = 'white'
    detailllinkgithub.style.borderColor = 'white'
    detailllinkgithub.addEventListener("mouseenter",()=>{
        detailllinkgithub.style.backgroundColor = 'white'
        detailllinkgithub.style.color = '#580202'
    
    })
    detailllinkgithub.addEventListener("mouseleave",()=>{
        detailllinkgithub.style.backgroundColor = ''
        detailllinkgithub.style.color = 'white'
    
    })
  
})
detaillslinklive.forEach((detailllinklive) =>{
    detailllinklive.style.color = 'white'
    detailllinklive.style.borderColor = 'white'
    detailllinklive.addEventListener("mouseenter",()=>{
        detailllinklive.style.backgroundColor = 'white'
        detailllinklive.style.color = '#580202'
    
    })
    detailllinklive.addEventListener("mouseleave",()=>{
        detailllinklive.style.backgroundColor = ''
        detailllinklive.style.color = 'white'
    
    })
  
})




textLogo.style.color = '#580202'
textLogo.style.fontWeight = '600'
cv.style.backgroundColor = '#580202'
cv.style.color = 'white'
mobilemenu.style.color = '#580202'
closemenu.style.color = '#580202'
menu.style.backgroundColor = 'rgb(230, 230, 230)'
about.style.color = 'black'
abmtittle.style.color = '#580202'
whoamitittle.style.color = '#580202'
abmtittle.style.borderColor = '#580202'
about.style.borderBottomColor = '#580202'
skills.style.borderBottomColor = '#580202'
skilltitle.style.borderColor = '#580202'
skilltitle.style.color = '#580202'
myportfolio.style.borderBottomColor = '#580202'
portfoliotitle.style.borderColor = '#580202'
portfoliotitle.style.color = '#580202'

window.localStorage.setItem("darkmode",true)
} 

// other case

else if(darkmode.checked == false){
    sun.style.display = 'initial'
    moon.style.display = 'none'
body.style.backgroundColor = ''
header.style.backgroundColor = ''
header.style.borderColor = ''
contactme.style.backgroundColor = ''
contactme.style.borderColor = ''
blackhomelogo.style.display = 'none'
homelogo.style.display = 'initial'
myname.style.color = ''
myname.style.fontWeight = ''
headerblacklogo.style.display = 'none'
headerlogo.style.display = 'initial'
home.style.color = ''
home.style.borderBottomColor = ''

headerlinks.forEach((headerlink) =>{
    headerlink.style.color = ''
    headerlink.style.fontWeight = ''
    headerlink .style.borderColor = ''


})
homeicones.forEach((homeicone) =>{
    homeicone.style.color = ''

})
contacticones.forEach((contacticone) =>{
    contacticone.style.color = ''

})
aboutmetextlinks.forEach((aboutmetextlink) =>{
    aboutmetextlink.style.color = ''
    aboutmetextlink.style.fontWeight = ''

})
skillcontainers.forEach((skillcontainer) =>{
    skillcontainer.style.borderColor = ''
    skillcontainer.style.backgroundColor = ''

  
})
skillprcntgs.forEach((skillprcntg) =>{
    skillprcntg.style.backgroundColor = ''
  
})

portfoliocontainers.forEach((portfoliocontainer) =>{
    portfoliocontainer.style.borderColor = ''
    portfoliocontainer.style.backgroundColor = ''

  
})
portfoliocontainersdetaills.forEach((portfoliocontainerdetaill) =>{
    portfoliocontainerdetaill.style.color = ''
    portfoliocontainerdetaill.style.backgroundColor = ''

  
})
detaillslinkgithub.forEach((detailllinkgithub) =>{
    detailllinkgithub.style.color = ''
    detailllinkgithub.style.borderColor = ''
    detailllinkgithub.addEventListener("mouseenter",()=>{
        detailllinkgithub.style.backgroundColor = ''
        detailllinkgithub.style.color = ''
    
    })
    detailllinkgithub.addEventListener("mouseleave",()=>{
        detailllinkgithub.style.backgroundColor = ''
        detailllinkgithub.style.color = ''
    
    })
  
})
detaillslinklive.forEach((detailllinklive) =>{
    detailllinklive.style.color = ''
    detailllinklive.style.borderColor = ''
    detailllinklive.addEventListener("mouseenter",()=>{
        detailllinklive.style.backgroundColor = ''
        detailllinklive.style.color = ''
    
    })
    detailllinklive.addEventListener("mouseleave",()=>{
        detailllinklive.style.backgroundColor = ''
        detailllinklive.style.color = ''
    
    })
  
})

textLogo.style.color = ''
textLogo.style.fontWeight = ''
cv.style.backgroundColor = ''
cv.style.color = ''
mobilemenu.style.color = ''
closemenu.style.color = ''
menu.style.backgroundColor = ''
about.style.color = ''
abmtittle.style.color = ''
whoamitittle.style.color = ''
abmtittle.style.borderColor = ''
about.style.borderBottomColor = ''
skills.style.borderBottomColor = ''
skilltitle.style.borderColor = ''
skilltitle.style.color = ''
myportfolio.style.borderBottomColor = ''
portfoliotitle.style.borderColor = ''
portfoliotitle.style.color = ''

window.localStorage.setItem("darkmode",false)
}
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'auto', includedLanguages: 'en,es,fr,de,ar', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
  

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
