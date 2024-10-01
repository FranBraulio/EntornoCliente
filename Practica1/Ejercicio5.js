/*Crea una página web que pida al usuario un número a través de un cuadro de lectura.
La página tiene que devolver un mensaje de alerta indicando si el dato introducido era realmente un dato o no*/

let numero = Number(prompt("Escriba un numero:"));

if (!isNaN(numero)) {
  alert("Es un número");
} else {
  alert("No es un número");
}
