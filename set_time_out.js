let elementotextoAlarma = document.getElementById("textoalarma");
let elementoSonidoAlarma = document.getElementById("audioAlarma");

function comenzarTiempo(){
    let elementoSegundos = document.getElementById('tiempoelegido').value;
    setTimeout(tiempocumplido, 1000*elementoSegundos); //El conteo se hace en milisegundos por eso 5000
}

function tiempocumplido(){
    elementoSonidoAlarma.play();
}

function comenzarReloj(){
    setInterval(tictac, 1000);
}

function tictac(){
    // Se crea un objeto del tipo Date para que tiempoActual reciba fecha y hora actual
   let tiempoActual = new Date();
   let hora = String(tiempoActual.getHours()).padStart(2, '0');
   let min = String(tiempoActual.getMinutes()).padStart(2,'0');
   // La funcion padStart permite que al string sea de 2 digitos incluyendo un 0 cuando sean numeros del 1 al 9
   let seg = String(tiempoActual.getSeconds()).padStart(2, '0');
   let textoHora = hora + ':' + min +':' + seg;
   elementotextoAlarma.textContent = textoHora;
}