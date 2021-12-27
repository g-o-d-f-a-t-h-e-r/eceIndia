const closeButton = document.querySelector('.close')
const line = document.querySelector('.line')
const inquiryForm = document.querySelector('.inquiryForm')
const darkBg = document.querySelector('#darkBg')
const body = document.querySelector('*')



setTimeout(() => {
    body.style.overflow='hidden'
    inquiryForm.classList.add('active')
    darkBg.classList.add('active')
}, 5000);


closeButton.addEventListener('click', () => {
    body.style.overflow='auto'
    inquiryForm.classList.remove('active')
    darkBg.classList.remove('active')
})