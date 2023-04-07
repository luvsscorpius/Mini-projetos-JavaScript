'use strict'

const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]') // ele acha qualquer elemento que tenha parte do atributo tecla
const operadores = document.querySelectorAll('[id*=operador]') // ele acha qualquer elemento que tenha parte do atributo tecla

let novoNumero = true
let operador
let numeroAnterior

const operacaoPendente = () => operador !== undefined

const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'))
        novoNumero = true

        // forma otimizada
        const resultado = eval(`${numeroAnterior} ${operador} ${numeroAtual}`)
        atualizarDisplay(resultado)

        // forma padrão

        // if (operador == '+') {
        //     atualizarDisplay(numeroAnterior + numeroAtual)
        // } else if (operador == '-') {
        //     atualizarDisplay(numeroAnterior - numeroAtual)
        // } else if (operador == '*') {
        //     atualizarDisplay(numeroAnterior * numeroAtual)
        // } else if (operador == '/') {
        //     atualizarDisplay(numeroAnterior / numeroAtual)
        // }
    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto.toLocaleString('pt-BR') // coloca pro padrão do brasil
        novoNumero = false
    } else {
        display.textContent += texto.toLocaleString('pt-BR')
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)
numeros.forEach(numero => numero.addEventListener('click', inserirNumero))

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular()
        novoNumero = true //quando clicar em um operador ele limpa o display
        operador = evento.target.textContent
        numeroAnterior = parseFloat(display.textContent.replace(',', '.'))
        console.log(operador)
    }
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))

const ativarIgual = () => {
    calcular()
    operador = undefined
}

document.getElementById('igual').addEventListener('click', ativarIgual)

const limparDisplay = () => display.textContent = ''

document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const limparCalculo = () => {
    limparDisplay()
    operador = undefined
    novoNumero = true
    numeroAnterior = undefined
}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo)

const removerUltimoNumero = () => display.textContent = display.textContent.slice(1)

document.getElementById('backspace').addEventListener('click', removerUltimoNumero)

const inverterSinal = () => {
    novoNumero = true
    atualizarDisplay(display.textContent * -1)
}

document.getElementById('inverter').addEventListener('click', inverterSinal)

const existeVirgula = () => display.textContent.indexOf(',') !== -1 //procura se existe essa string no caso aqui a vírgula
const existeValor = () => display.textContent.length > 0

const inserirVirgula = () => {
    if (!existeVirgula()) {
        if (existeValor()) {
            atualizarDisplay(',')
        } else {
            atualizarDisplay('0,')
        }
    }
}

document.getElementById('decimal').addEventListener('click', inserirVirgula)

const mapaTeclado = {
    '0': 'tecla0',
    '1': 'tecla1',
    '2': 'tecla2',
    '3': 'tecla3',
    '4': 'tecla4',
    '5': 'tecla5',
    '6': 'tecla6',
    '7': 'tecla7',
    '8': 'tecla8',
    '9': 'tecla9',
    '+': 'operadorAdicionar',
    '-': 'operadorSubtrair',
    '*': 'operadorMultiplicar',
    '/': 'operadorDividir',
    '=': 'igual',
    'Enter': 'igual',
    'Backspace': 'backspace',
    'c': 'limparDisplay',
    'Escape': 'limparCalculo',
    ',': 'decimal'
}

const mapearteclado = (evento) => {
    const tecla = evento.key

    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click()
}

document.addEventListener('keydown', mapearteclado)