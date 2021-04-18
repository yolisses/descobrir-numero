
let contador = 0
let numeroGerado = Math.floor(Math.random() * 100); 
console.log(numeroGerado)

document.getElementById("form").onsubmit=(event)=>{
    event.preventDefault()
    testar()
    
    console.log("teste")

}

function testar (){
    let tentativas = document.getElementById("tentativa")
    console.log("entrou na função")
    let numeroDigitado = document.getElementById("chute").value
    console.log(numeroDigitado)
    contador+=1
    document.getElementById("tentativa").innerHTML= `tentativa: ${contador} `

    
    if (numeroGerado == numeroDigitado){
        console.log("igualzin doid")
        
    }
    else if (numeroGerado > numeroDigitado){
        console.log("numero é maior")
        console.log(contador)        
        


    }
    else if (numeroGerado < numeroDigitado){
        console.log("numero é menor")
        console.log(contador)
        
        


    }
}