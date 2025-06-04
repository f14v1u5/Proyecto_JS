let numeros = [];
numeros = [15,80,650,50.30,-10];
document.write('Elementos: ', numeros);
document.write('<br>');
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
numeros[0] = 14;
document.write('Elementos: ',numeros);
document.write('<br>------------');

let frutas = ['manzanas', 'peras', 'naranjas', 'mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');

// Ver cantidad de elementos
document.write('Cantidad: ', numeros.length);
document.write('<br>');

// Saber ultimo elemento
document.write('Ultimo elemento: ', numeros[numeros.length-1]);
document.write('<br>');

// Arrays en tipo texto
document.write('En String: ', numeros.toString());
document.write('<br>');

// Unir tipos de arrays
let letras = ['a', 'b', 'c'];
let numeros2 = [1,2,3];
document.write('Array alfanumero: ', letras.concat(numeros2));
document.write('<br>');

//Borrar ultimo elemento
numeros.pop();
document.write(numeros);
document.write('<br>');

//Agregar elemento al final
numeros.push(-10)
document.write(numeros);
document.write('<br>');

//Eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//Agregar elemento al principio
numeros.unshift(1000);
document.write(numeros);
document.write('<br>');

//Eliminar elemento a partir de un punto
numeros.splice(2,3) //Desde la posicion "2" elimina 3 elementos
document.write(numeros);
document.write('<br>');

//Copiar un array
let cantidades = [100,200,500,600,800];
let copia = cantidades.slice(1,4); //Copia desde el elemento 1 (inclusive) hasta la posicion 4 (sin incluir esta)
document.write('Array copia: ', copia);
document.write('<br>');

//Organizar alfabeticamente y al reves
let objetos = ['Carro', 'Botella', 'Planeta', 'Zorro'];
document.write('Original: ',objetos);
document.write('<br>');
document.write('Alfabetico: ', objetos.sort());
document.write('<br>');
document.write('Al reves: ', objetos.reverse());

