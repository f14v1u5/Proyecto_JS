const fechaactual = new Date();

document.write(fechaactual);
document.write('<br>');

let fecha = new Date ();
document.write('Hoy es:', fecha.getDate());
document.write('<br>');
document.write('El mes es: ', fecha.getMonth()+1);
document.write('<br>');
document.write('El anio es: ', fecha.getFullYear());
document.write('<br>');
document.write('La hora es: ', fecha.getHours());