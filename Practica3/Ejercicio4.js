// Función para generar una matriz cuadrada de tamaño n con números aleatorios entre 1 y 100
function generarMatriz(n) {
    let matriz = [];
    for (let i = 0; i < n; i++) {
        let fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(Math.floor(Math.random() * 100) + 1);  // Números aleatorios entre 1 y 100
        }
        matriz.push(fila);
    }
    return matriz;
}

// Función para sumar dos matrices
function sumarMatrices(matriz1, matriz2) {
    let n = matriz1.length;
    let matrizSuma = [];
    for (let i = 0; i < n; i++) {
        let fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(matriz1[i][j] + matriz2[i][j]);
        }
        matrizSuma.push(fila);
    }
    return matrizSuma;
}

// Función para mostrar una matriz en la consola
function mostrarMatriz(matriz, nombre) {
    console.log(`\n${nombre}:`);
    matriz.forEach(fila => {
        console.log(fila.join(" "));
    });
}

// Función principal
function main() {
    //Pon un numero entre 2 y 10
    let n = 4;
    
    if (n < 2 || n > 10) {
        console.log("El número debe estar entre 2 y 10.");
        return;
    }
    
    // Generar dos matrices cuadradas de tamaño n
    let matriz1 = generarMatriz(n);
    let matriz2 = generarMatriz(n);
    
    // Mostrar las matrices originales
    mostrarMatriz(matriz1, "Matriz 1");
    mostrarMatriz(matriz2, "Matriz 2");
    
    // Sumar las matrices
    let matrizSuma = sumarMatrices(matriz1, matriz2);
    
    // Mostrar la matriz resultante
    mostrarMatriz(matrizSuma, "Matriz Suma");
}

// Ejecutar el programa
main();
