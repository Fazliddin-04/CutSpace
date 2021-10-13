const menu = document.querySelector('#menu.menu')
const bar = document.querySelector('#menu .bar')

bar.addEventListener('click', () => {
    bar.classList.toggle('active')
    menu.classList.toggle('active')
})

const btnSubs = document.querySelector('#subscribe.btn_primary')
const subscribed = document.querySelector('.subscribed')

btnSubs.addEventListener('click', () => {
    btnSubs.classList.add('active')
    subscribed.classList.add('active')
})