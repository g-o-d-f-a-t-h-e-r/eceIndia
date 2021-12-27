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




const gstCertificate = document.getElementById('gstCertificate')
const gstCertificateText = document.querySelector('.gstCertificateText')
const gstCertificateDiv = document.getElementById('gstCertificateDiv')

const panCard = document.getElementById('panCard')
const panCardText = document.querySelector('.panCardText')
const panCardDiv = document.getElementById('panCardDiv')



gstCertificate.onchange = (e) => {
    gstCertificateText.innerText = e.target.files[0].name
    gstCertificateDiv.style.border = "1px solid #162661"
}
panCard.onchange = (e) => {
    panCardText.innerText = e.target.files[0].name
    panCardDiv.style.border = "1px solid #162661"
}



const onClick = () => {
    if(gstCertificate.files.length == 0){
        gstCertificateDiv.style.border = "1px solid red"
    }
    if(panCard.files.length == 0){
        panCardDiv.style.border = "1px solid red"
    }
    if(msmeCertificate.files.length == 0){
        msmeCertificateDiv.style.border = "1px solid red"
    }
    
}












offlineButton.addEventListener('click', () => {
    online.classList.remove('active')
    onlineButton.classList.remove('active')
    offline.classList.add('active')
    offlineButton.classList.add('active')
})
