
let calcular = document.getElementById('calcular')



function imc() {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('res')

    if (nome !== '' && altura !== '' && peso !== '') {
        let valorimc = (peso / (altura * altura)).toFixed(2)
        let classificacao = ''

        if (valorimc < 18.5) {
            classificacao = `você está a baixo do peso`
        } else if (valorimc < 25) {
            classificacao = `você está normal`
        } else if (valorimc < 25) {
            classificacao = `você está normal`
        } else if (valorimc < 29) {
            classificacao = `você está sobre o peso`
        } else if (valorimc < 39) {
            classificacao = `você está obeso`
        } else if (valorimc > 40) {
            classificacao = `você está com obesidade grave procure ajuda médica urgente.`
        }

        resultado.textContent = `${nome} o seu IMC é ${valorimc} e ${classificacao}`
    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}



calcular.addEventListener('click', imc)