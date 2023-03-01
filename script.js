const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login_link')
const registerLink = document.querySelector('.login_registration')

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})