// DECLARACION PARA CREAR CLASES
class Persona {
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = 'Av. Siempreviva 742';
    telefono = '55553472';
    email = 'amantedelacomida@aol.com';

    trabajar(){
        return 'Trabaja en la planta nuclear';
    }
    estudiar(){
        return 'Escuela primaria de Sprinfield';
    }
}

// DEFINIR UNA INSTANCIA DE UNA CLASE, EL const ES PARA QUE NO CAMBIE
const homero = new Persona();
const bart = new Persona();
document.write(homero.nombre);
document.write('<br>');
document.write('Bart ', bart.apellido);