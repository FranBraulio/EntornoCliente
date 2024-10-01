/*
Implementa un programa en JS que permita ingresar por teclado tres números. 
Si al menos uno de los valores ingresados es menor a 10, el programa 
debe imprimir el mensaje "Alguno de los números son menores a diez".
*/

let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");
let numero3 = prompt("Ingresa el tercer numero");

if(numero1 < 10 || numero2 < 10 || numero3 < 10){
    document.getElementById("mensaje").textContent = "Alguno de los números son menores a diez";
}

