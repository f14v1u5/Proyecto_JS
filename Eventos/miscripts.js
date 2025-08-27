let socket = new WebSocket("ws://localhost:8080");
let mensajeingresado = document.getElementById("mensajeIngresado");
let botonenviar = document.getElementById("botonEnviar");

function mostraMensajes (contenido){
    let contenedormensajes = document.getElementById("mensajesChat");
    let elementoMensaje = document.createElement("p");
    elementoMensaje.innerText =contenido;
    contenedormensajes.appendChild(elementoMensaje);
}

botonenviar.onclick = function(){
    let mensaje  = mensajeingresado.value;
    mostraMensajes(mensaje);
    socket.send(mensaje);
}

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarMensajes (mensaje);
}



/* PAGINA 3

let menu = document.getElementById("mimenu");
let boton = document.getElementById("miboton");

boton.addEventListener("mouseout", function(){
    menu.style.display = "none";
});

boton.addEventListener("mouseover", function(){
    menu.style.display = "block";
});

boton.addEventListener("click", function(){
    menu.style.display = "block";
});

document.addEventListener("mousemove", function(event){
    console.log("Posicion X: "+ event.clientX + 
        " - Posicion Y: "+ event.clientY);
})



/* PAGINA 2

let texto1 = document.getElementById("mitexto");

function verifica_numero(event){
    // Los numeros 0 a 9 en el codigo ASCII se identifican con los codigos del 48 al 57
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

texto1.addEventListener("keydown", verifica_numero);
texto1.addEventListener("keyup", function(event){
    //Nos mostrara las teclas presionadas por el usuario
    console.log("Entrada del usuario: " + event.target.value)
});

texto1.addEventListener("keypress", function(event){
    //Nos mostrara la tecla presionada por el usuario
    console.log("Caracter ingresado: "+ event.key)
});


//---------------------------------------------------


/* PAGINA 1

EVENTOS DE MOUSE
let boton = document.getElementById("boton1");

function mensaje1(){
    alert("CLICK")
}

function mensaje2(){
    alert("MOUSEOVER")
}

boton.addEventListener("mouseover", mensaje2);
*/


//---------------------------------------------------


/* PAGINA1

EVENTOS target, currentTarget, preventDefault
let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");
let enlace = document.getElementById("enlace1");

function bloqueoEnlace (event){
    event.preventDefault();
    alert("Enlace deshabilitado");
}
function mostrarMensaje (event){
    alert(event.target);
    alert(event.currentTarget);
}

div1.addEventListener("click", mostrarMensaje);

enlace.addEventListener("click", bloqueoEnlace);
*/