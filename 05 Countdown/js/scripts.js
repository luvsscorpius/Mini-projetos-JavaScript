'use strict' // Pega erros

// funcao parar deixar os numeros com dois digitos

const formatarDigito = (digito) => `0${digito}`.slice(-2) //adiciona um 0 ao digito

// atualizar tempo

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos') //pega oos segundos
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias')

    const qtdSegundos = tempo % 60
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60) // a biblioteca math só pega número inteiro
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const qtdDias = Math.floor(tempo / (60 * 60 * 24))

    segundos.textContent = formatarDigito(qtdSegundos) // mostra na tela os segundos
    minutos.textContent = formatarDigito(qtdMinutos)
    horas.textContent = formatarDigito(qtdHoras)
    dias.textContent = formatarDigito(qtdDias)
}

// função pra fazer a contagem

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id) // aqui ele está dizendo para a contagem setinterval
    const contar = () => {
        if (tempo == 0) {
            pararContagem()
        }
        atualizar(tempo)
        tempo--
    }
    const id = setInterval(contar, 1000) //a cada segundo vai ser executado essa callback
}

const tempoRestante = () => {
    // 1 de janeiro
    const dataEvento = new Date('2023-04-14 17:00:00')
    const dataHoje = Date.now()
    return Math.floor((dataEvento - dataHoje) / 1000)
}

contagemRegressiva(tempoRestante()) 