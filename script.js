var texto=document.getElementById("texto")
texto.focus()

var mensaje=document.getElementById("mensaje")

function encriptarTexto (texto){
    texto=texto.replaceAll("e","enter");
    texto=texto.replaceAll ("i","imes");
    texto=texto.replaceAll ("a","ai");
    texto=texto.replaceAll ("o","ober");
    texto=texto.replaceAll ("u","ufat");
    return texto
}

function accionEncriptar(){
    const textoEncriptado=encriptarTexto(texto.value)
    mensaje.value = textoEncriptado;
    texto.value="";
    mensaje.style.backgroundImage="none";
}

function desencriptarTexto (texto){
    texto=texto.replaceAll("enter","e");
    texto=texto.replaceAll ("imes","i");
    texto=texto.replaceAll ("ai","a");
    texto=texto.replaceAll ("ober","o");
    texto=texto.replaceAll ("ufat","u");
    return texto
}

function accionDesencriptar(){
    const textoDesencriptado=desencriptarTexto(texto.value)
    mensaje.value = textoDesencriptado;
    texto.value="";
    mensaje.style.backgroundImage="none";
}

function copiarTexto(){
    var contenido = mensaje.value;
    navigator.clipboard.writeText(contenido)
    .then(function() {
        mensaje.value=""
        mensaje.style.backgroundImage = "url(Sherlock.png)";
    })

    .catch(function() {
      alert("Error al copiar el texto.");
    });
}

// Botones
var botonEncriptar=document.getElementById("encriptar");
botonEncriptar.onclick=accionEncriptar;

var botonDesencriptar=document.getElementById("desencriptar");
botonDesencriptar.onclick=accionDesencriptar;

var botonCopiar=document.getElementById("copiar");
botonCopiar.onclick=copiarTexto;