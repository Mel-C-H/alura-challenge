function encriptarTexto() {
    const textoOriginal = document.getElementById("txtEncriptar").value;

    if (/[^a-z\s]/.test(textoOriginal)) {
        alert("Por favor, ingrese solo texto en minúsculas sin caracteres especiales.");
        return;
    }

    const encriptado = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    let textoEncriptado = textoOriginal.replace(/[aeiou]/g, function(match) {
        return encriptado[match];
    });

    document.getElementById("txtDesencriptar").value = textoEncriptado;

    const elementos = document.querySelectorAll('.paginaWeb__contenido__output__cuadro__container');
            elementos.forEach(elemento => {
                elemento.style.backgroundImage = 'none';
            });
    const cuadroTexto = document.querySelectorAll('.paginaWeb__contenido__output__cuadro__texto');
            cuadroTexto.forEach(elemento => {
                elemento.style.display = 'none';
            });
    
            const botonOculto = document.querySelectorAll(".paginaWeb__contenido__output__boton_container");
            botonOculto.forEach(accion => {
                accion.style.visibility = 'visible';
            });
}

function desencriptarTexto() {
    const textoEncriptado = document.getElementById("txtEncriptar").value;

    if (/[^a-z\s]/.test(textoEncriptado)) {
        alert("Por favor, ingrese solo texto en minúsculas sin caracteres especiales.");
        return;
    }

    const desencriptado = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };

    let textoDesencriptado = textoEncriptado.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        return desencriptado[match];
    });

    document.getElementById("txtDesencriptar").value = textoDesencriptado;

    const elementos = document.querySelectorAll('.paginaWeb__contenido__output__cuadro__container');
            elementos.forEach(elemento => {
                elemento.style.backgroundImage = 'none';
            });
    const cuadroTexto = document.querySelectorAll('.paginaWeb__contenido__output__cuadro__texto');
            cuadroTexto.forEach(elemento => {
                elemento.style.display = 'none';
            });

    const botonOculto = document.querySelectorAll(".paginaWeb__contenido__output__boton_container");
            botonOculto.forEach(accion => {
                accion.style.visibility = 'visible';
            });
}

function copiarTexto() {
    const textoProcesado = document.getElementById("txtDesencriptar");
    textoProcesado.select();
    textoProcesado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}