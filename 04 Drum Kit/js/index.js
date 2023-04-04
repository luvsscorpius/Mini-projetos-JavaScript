'use strict';

//Modo estrito ele pega erros

const sons = {
    'A': 'boom.wav', //criando um JSON onde voce passa os seguintes parâmetros a letra a sera o som tal
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div') // esse comando cria uma div
    div.classList.add('key') // esse comando adiciona uma classe na div
    div.textContent = texto // esse comando adiciona o texto na div
    div.id = texto // esse comando adiciona um id na div
    document.getElementById('container').appendChild(div)
}

// criar uma função para exibir os sons na tela

const exibir = (sons) => Object.keys(sons).forEach(criarDiv)
// Object.keys pega só as chaves da função e nao tudo
//forEach varre todos os objetos e o (criarDiv) voce está pedindo para o forEach criar uma div com todas as chaves


// criando o evento do clique para tocar os sons

const tocarSom = (letra) => {
    const audio = new Audio(`sounds/${sons[letra]}`) // criando uma variável de audio
    audio.play() // da play no audio
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active') // adiciona o efeito do css na div
const removerEfeito = (letra) => {
    const div = document.getElementById(letra)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
} // remove o efeito do css na div

const ativarDiv = (evento) => { // evento.target.id identifica a letra que foi clicada e isso é armazenado em uma variável
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase() // evento.key pega a letra que foi clicada pelo teclado
    const letraPermitida = sons.hasOwnProperty(letra) // mostra se a letra é cadastrada, isso foi feito pra nao deixar passar o container
    if (letraPermitida) {
        adicionarEfeito(letra)
        tocarSom(letra)
        removerEfeito(letra)
    }
}


exibir(sons)
document.getElementById('container').addEventListener('click', ativarDiv)

window.addEventListener('keydown', ativarDiv) // esse comando ouve a letra que foi clicada pelo teclado