let palabra = 'murcielago';

for ( let f in palabra) {
    if (palabra[f]=='a' || palabra[f]=='e' || palabra[f]=='i' || palabra[f]=='o' || palabra[f]=='u'){
        vocal++;
    }
}
document.write('Cantidad de vocales de la palabra ', palabra, ': ', vocal)