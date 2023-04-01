let lamp = document.getElementById('lamp')
let liga = document.getElementById('turnOn')
let desliga = document.getElementById('turnOn')
let botoes = document.getElementById('botoes')

function isBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligar() {
    if (!isBroken()) {
        lamp.src = 'img/ligada.jpg'
    }
}

function desligar() {
    if (!isBroken()) {
        lamp.src = 'img/desligada.jpg'
    }
}

function quebrar() {
    lamp.src = 'img/quebrada.jpg'
}


desliga.addEventListener('click', desligar)
liga.addEventListener('click', ligar)
lamp.addEventListener('click', quebrar)
lamp.addEventListener('mouseenter', ligar)
lamp.addEventListener('mouseleave', desligar)






