const downloadsNavigation = document.querySelector('.downloads-nav a')
downloadsNavigation.classList.add('active')



const online = document.querySelector('.online')
const offline = document.querySelector('.offline')
online.classList.add('active')


const onlineButton = document.querySelector('.online-btn')
const offlineButton = document.querySelector('.offline-btn')
onlineButton.classList.add('active')


onlineButton.addEventListener('click', () => {
    offline.classList.remove('active')
    offlineButton.classList.remove('active')
    online.classList.add('active')
    onlineButton.classList.add('active')
    
})

offlineButton.addEventListener('click', () => {
    online.classList.remove('active')
    onlineButton.classList.remove('active')
    offline.classList.add('active')
    offlineButton.classList.add('active')
})
