let contador
let numeroGerado

const status = document.querySelector(".status")

function iniciar() {

    document.querySelector("#btnVerifica").innerHTML = "Verificar"
    status.innerHTML = "<spam style='color:red'>Digite algum valor</spam>"
    contador = 0
    numeroGerado = Math.floor(Math.random() * 100)
    console.log(numeroGerado)
    document.getElementById("form").onsubmit = (event) => {
        event.preventDefault()
        testar()
    }
    document.querySelector("#chute").value = ""
}

iniciar()

function testar() {
    let tentativas = document.getElementById("tentativa")
    console.log("entrou na função")
    let numeroDigitado = document.getElementById("chute").value
    console.log(numeroDigitado)
    contador += 1
    document.getElementById("tentativa").innerHTML = `Tentativa${contador > 1 ? 's' : ''}: <spam style="color:blue">${contador}</spam> `


    if (numeroGerado == numeroDigitado) {
        status.innerHTML = "<spam style='color:green'>Parabéns, você acertou!!</spam>"
        document.querySelector("#btnVerifica").innerHTML = "Tentar novamente?"

        document.getElementById("form").onsubmit = (event) => {
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