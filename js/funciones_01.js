// FUNCIONES DECLARATIVAS
function saludar (){
    document.write('Hola');
}

function despedir (){
    document.write('Adios')
}

// FUNCIONES CON PARAMETROS
let resultado
function sumaP(valor1, valor2) {
    valor1 = parseInt(prompt('Ingrese valor 1:'));
    valor2 = parseInt(prompt('Ingrese valor 2:'));
    resultado = valor1 + valor2;
    alert('RESULTADO: '+ resultado);
}

// FUNCIONES CON RETURN

function sumaR(a,b) {
    return a + b;
}

function verColor (valor) {
    valor = parseInt(prompt('Ingrese valor 1 / 3...'));
    switch(valor){
        case 1:
            return 'ROJO';
        case 2:
            return 'VERDE';
        case 3:
            return 'AMARILLO';
        default:
            return 'VALOR INCORRECTO'
    }   
}
alert (verColor());