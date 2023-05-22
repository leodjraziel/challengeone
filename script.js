const textArea =document.querySelector(".text-area")
const mensaje = document.querySelector(".text-mensaje")


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
    mensaje.style.display="inline-block";
    
}

function encriptar(stringencriptada){
    let matrizCodigo =[["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringencriptada=stringencriptada.toLowerCase()

    for(let i=0 ;i<matrizCodigo.length; i++){
        if(stringencriptada.includes(matrizCodigo[i][0])){
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringencriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";

}


function desencriptar(stringdesencriptada){
    let matrizCodigo =[["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringdesencriptada=stringdesencriptada.toLowerCase()

    for(let i=0 ;i<matrizCodigo.length; i++){
        if(stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringdesencriptada
}

// cambiar stylos css //
const imagen= document.getElementById("contenedor-muneco");
const textos= document.getElementById("textos");
const botoncopiar= document.getElementById("boton-copiar");


function cambiarStylos(){
    
    imagen.style.display="none";
    textos.style.display="none";
    botoncopiar.style.display="inline-block";

}


function btnCopiar(){
    mensaje.select();
    document.execCommand("copy");
}