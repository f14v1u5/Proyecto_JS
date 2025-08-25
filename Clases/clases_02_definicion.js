class Papel {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// EXPRESION DE CLASE ANONIMA
let Papel_A = class {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// EXPRESION NOMBRADA

let Papel_B = class PapelX {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}