let display = document.querySelector('.display')
let btn = document.querySelectorAll('button')
let decreaseBtn = document.querySelector('.decrease')
let increaseBtn = document.querySelector('.increase')
let i = 0

decreaseBtn.addEventListener('click', decFun)
increaseBtn.addEventListener('click', incFun)

function decFun() {
    i--
    display.textContent = i
}

function incFun() {
    i++
    display.textContent = i
}