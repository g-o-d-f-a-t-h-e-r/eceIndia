const careerNav = document.querySelector('.career-nav a')
careerNav.classList.add('active')


const resumeText = document.querySelector('.resumeText')
const applySecP = document.getElementById('applySecP')

document.getElementById('resume').onchange = (e) => {
    resumeText.innerText = e.target.files[0].name
    applySecP.style.border = "1px solid #162661"
}


const onClick = () => {
    if(document.getElementById('resume').files.length == 0){
        applySecP.style.border = "1px solid red"
    }
    
}