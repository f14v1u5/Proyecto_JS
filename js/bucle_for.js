/**for (let f = 1; f <= 20; f+=2) {
    if (f == 15) {
        document.write('Aqui el valor es: ', f)
        document.write('<br>');
    }
    
}
document.write("Fin de bucle")**/

const frutas = ['manzanas', 'peras', 'uvas', 'naranjas'];
for (let f = 0; f < frutas.length; f++){
    document.write('Fruta: ',f,'=', frutas[f]);
    document.write('<br>');
}