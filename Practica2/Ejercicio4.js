//Ejercicio4
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrizTaspuesta = [];
for(let i = 0; i < matriz.length; i++){
    matrizTaspuesta[i] = [];
    for(let j = 0; j < matriz.length; j++){
        matrizTaspuesta[i][j] = matriz[j][i];
    }
}
console.log("Matriz");
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i]);
}

console.log("Matriz Traspuesta");
for(let i = 0; i < matrizTaspuesta.length; i++){
    console.log(matrizTaspuesta[i]);
}
