/*
Implementa una aplicación web que pida al/la usuario/a un número entero positivo.
Los requisitos son:

    Si no es un número, o no es positivo, la página no mostrará nada. Se quedará en blanco.
    En la pestaña del navegador se debe mostrar el título "Ej8. Pirámide".
    La aplicación escribirá por pantalla un triángulo con tantos asteriscos como indique el número de entrada.
    Los asteriscos deben escribirse de forma monoespaciada.
 */

let numero = prompt("Escribe un numero positivo");
numero = parseInt(numero);
let piramide = "";
if (!isNaN(numero) || numero > 0) {
    for(let i = 1; i <= numero; i++) {
        piramide += "* ".repeat(i).trim()+ "\n";
    }
}
document.getElementById("mensaje").textContent =piramide;
document.getElementById("title").textContent ="Ej8. Piramide";


