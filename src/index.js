
const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarlinks = document.getElementsByClassName('nav-links')[0]

hamburger.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})