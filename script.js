let contador = 0
let numeroGerado = Math.floor(Math.random() * 100);
console.log(numeroGerado)

document.getElementById("form").onsubmit = (event) => {
    event.preventDefault()
    testar()
}

const status = document.querySelector(".status")
status.innerHTML = "<spam style='color:red'>Digite algum valor</spam>"

function testar() {
    let tentativas = document.getElementById("tentativa")
    console.log("entrou na função")
    let numeroDigitado = document.getElementById("chute").value
    console.log(numeroDigitado)
    contador += 1
    document.getElementById("tentativa").innerHTML = `Tentativa${contador > 1 ? 's' : ''}: <spam style="color:blue">${contador}</spam> `


    if (numeroGerado == numeroDigitado) {
        status.innerHTML = "<spam style='color:green'>Parabéns, você acertou!!</spam>"
    }
    else if (numeroGerado > numeroDigitado) {
        status.innerHTML = "O número sorteado é maior"
    }
    else if (numeroGerado < numeroDigitado) {
        status.innerHTML = "O número sorteado é menor"
    }
}