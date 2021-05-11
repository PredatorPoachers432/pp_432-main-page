////////// Toggle for mobile navigation /////////////

let menu = document.querySelector('.nav-link')

function toggleMenu() {

    if (menu.style.display === 'inline-block') {
        menu.style = 'none'
    } else {
        menu.style.display = 'inline-block'
    }
}

let menuLinks = document.querySelectorAll('#menuLink')
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', toggleMenu)
})

///////// end of toggle navigation ////////////








///////// Auto typing for main heading ///////// 

let i = 0
let text = 'Hello, we are Predator Poachers 432.'

let speed = 60


let heading = document.querySelector('.heading')
window.addEventListener('load', autoTypeWritter)

function autoTypeWritter() {
    if (i < text.length) {
        heading.textContent += text.charAt(i)
        i++
        setTimeout(autoTypeWritter, speed)
    }
}

///////// end Auto typing for main heading ///////// 





///////////// Construct Pop up //////////////

function closeConstPopUp() {
    document.querySelector('.construct-pop-up').style.display = 'none'
}

///////////// End of construct Pop up ////////////// 






////////// Social media links ////////////////

function facebookLink(){
    window.open('https://www.facebook.com/Predatorpoachers432/', '_blank')
}

function youtubeLink(){
    window.open('https://www.youtube.com/channel/UCkKpoORVsBSScBbRGLbmfZQ', '_blank')
}

function githubLink(){
    window.open('https://github.com/PredatorPoachers432', '_blank')
}

////////// Social media links ////////////////







//////////// Pop up for newletter /////////// 

let popUpBody = document.querySelector('.pop-up-body')
function closePopUp() {
    popUpBody.style.display = 'none'
}

//////////// end of pop up for newletter /////////// 
