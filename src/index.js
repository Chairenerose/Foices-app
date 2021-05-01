
const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarlinks = document.getElementsByClassName('nav-links')[0]

hamburger.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})


const statementbutton = document.getElementsByClassName('commitmentbutton')[0]
const statement = document.getElementsByClassName('commitment')[0]

statementbutton.addEventListener('click', () => {
    statement.classList.toggle('active')
})