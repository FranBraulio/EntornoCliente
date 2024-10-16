function mismasLetras(palabra1, palabra2) {
    // Convertir las palabras a minúsculas, ordenarlas y compararlas
    let palabra1Ordenada = palabra1.toLowerCase().split('').sort().join('');
    let palabra2Ordenada = palabra2.toLowerCase().split('').sort().join('');

    return palabra1Ordenada === palabra2Ordenada;
}