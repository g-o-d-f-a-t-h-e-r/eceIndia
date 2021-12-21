const projectsNav = document.querySelector('.projects-nav a')
projectsNav.classList.add('active')



// Sections
const rooftopSec = document.querySelector('.rooftop-sec')
const waterPumping = document.querySelector('.waterPumping')
const otherProjects = document.querySelector('.otherProjects')


// Buttons
const rooftop = document.querySelector('#rooftop')
const waterPump = document.querySelector('#waterPump')
const other = document.querySelector('#other')


rooftop.addEventListener('click', () => {
    waterPumping.classList.remove('activate')
    otherProjects.classList.remove('activate')
    rooftopSec.classList.remove('deactivate')   
    rooftop.classList.remove('deactivate')
    waterPump.classList.remove('activate')
    other.classList.remove('activate')
})

waterPump.addEventListener('click', () => {
    otherProjects.classList.remove('activate')
    rooftopSec.classList.add('deactivate')
    rooftop.classList.add('deactivate')
    waterPumping.classList.add('activate')
    waterPump.classList.add('activate')
    other.classList.remove('activate')
    
})

other.addEventListener('click', () => {
    waterPumping.classList.remove('activate')
    rooftopSec.classList.add('deactivate')
    otherProjects.classList.add('activate')
    other.classList.add('activate')
    rooftop.classList.add('deactivate')
    waterPump.classList.remove('activate')
})