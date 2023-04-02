let semaforo = document.getElementById('semaforo')
let red = document.getElementById('vermelho')
let yellow = document.getElementById('amarelo')
let green = document.getElementById('verde')
let automatic = document.getElementById('automatico')

function vermelho() {
    semaforo.src = 'img/vermelho.png'
}

function amarelo() {
    semaforo.src = 'img/amarelo.png'
}

function verde() {
    semaforo.src = 'img/verde.png'
}

red.addEventListener('click', vermelho)
yellow.addEventListener('click', amarelo)
green.addEventListener('click', verde)
automatic.addEventListener('click', automatico)
