let contador
let numeroGerado

const status = document.querySelector(".status")
const tentativas = document.querySelector("#tentativa")
const chute = document.querySelector("#chute")
const form = document.querySelector("#form")
const btnVerifica = document.querySelector("#btnVerifica")

function iniciar() {
    contador = 0
    numeroGerado = Math.floor(Math.random() * 100)
    status.innerHTML = "<spam style='color:red'>Digite algum valor</spam>"
    tentativas.innerHTML = "Tentativa: 0"
    chute.value = ""
    chute.focus()
    btnVerifica.innerHTML = "Verificar"
    console.log(numeroGerado)
    form.onsubmit = event => {
        event.preventDefault()
        testar()
    }
}

function testar() {
    contador += 1
    tentativas.innerHTML =
        `Tentativa${contador > 1 ? 's' : ''}: <spam style="color:blue">${contador}</spam>`

    const numeroDigitado = chute.value
    if (numeroGerado == numeroDigitado) {
        status.innerHTML = "<spam style='color:green'>Parabéns, você acertou!!</spam>"
        btnVerifica.innerHTML = "Tentar novamente?"
        form.onsubmit = event => {
            event.preventDefault()
            iniciar()
        }
    }
    else if (numeroGerado > numeroDigitado) {
        status.innerHTML = "O número sorteado é maior"
    }
    else if (numeroGerado < numeroDigitado) {
        status.innerHTML = "O número sorteado é menor"
    }
}

iniciar()