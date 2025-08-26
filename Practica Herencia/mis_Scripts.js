class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){
        // Devuelve un String armado con toda la informacion
        // Comilla invertida `, Signo $ y {} para enlazar valores
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} anios`;
    }
}

class Perro extends Animal{
    constructor (nombre, peso, edad, raza){
        super (nombre, peso, edad);
        this.raza = raza;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} anios - \
        ${this.raza}`;
    }   
}

class Gato extends Animal{
    constructor (nombre, peso, edad, sexo){
        super (nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} anios - \
        ${this.sexo}`;
    }
}

class Conejo extends Animal{
    constructor (nombre, peso, edad, color){
        super (nombre, peso, edad);
        this.color = color;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} anios - \
        ${this.color}`;
    }
}


let perro1 = new Perro ('Firulais', 12, 3, 'Doberman');
let gato1 = new Gato ('Puto', 5, 2, 'Masculino');
let conejo1 = new Conejo ('Rabbit', 3, 1, 'Blanco');
let animales = [perro1, gato1, conejo1];

function mostraranimales (){
    // Creamos una variable para almacenar el elemento lista creado en HTML para mostrar los animales
    let lista = document.getElementById('listaAnimales');
    // Cramos un loop donde animal recorrera la lista animales
    for(let animal of animales){
        // Creamos una variable para almacenar un elemento lista con el contenido de item
        let item = document.createElement('li');
        // item tendra un texto interno para tomar la informacion de la funcion
        item.innerText = animal.informacion();
        // Agregamos a la lista los items uno por uno hasta acabar la lista
        lista.appendChild(item);
    }
}