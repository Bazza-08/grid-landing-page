var hamburgerClose = document.querySelector('.menu-hamburger-close')
var hamburgerOpen = document.querySelector('.menu-hamburger')
var navigation = document.querySelector('.navigation')
var overlay = document.querySelector('.overlay')

hamburgerOpen.addEventListener('click', () => {
    hamburgerClose.classList.toggle('display')
    hamburgerOpen.classList.toggle('display')
    navigation.classList.toggle('display')
    overlay.classList.toggle('display')
})

hamburgerClose.addEventListener('click', () => {
    hamburgerClose.classList.toggle('display')
    hamburgerOpen.classList.toggle('display')
    navigation.classList.toggle('display')
    overlay.classList.toggle('display')
})