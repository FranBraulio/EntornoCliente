//Ejercicio3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let array0 = new Array(2);
let array1 = new Array(2);
let array2 = new Array(2);
let diagonal = new Array(2);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if(i == 0){
            array0.push(matriz[i][j]);
        }else if(i == 1){
            array1.push(matriz[i][j]);
        }else{
            array2.push(matriz[i][j]);
        }
    }
}

for (let i = 0; i < matriz.length; i++) {
    diagonal.push(matriz[i][i]);
}

console.log("La matriz es:");
console.log(array0);
console.log(array1);
console.log(array2);


console.log("Y la diagonal es:");
console.log(diagonal);



