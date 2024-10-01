/*
Construye un programa de Inteligencia Artificial que salude correctamente según la hora del día.

De 7 a 12 dirá “Buenos días”, de 12 a 20 “Buenas tardes”, de 20 a 2 
“Buenas noches” y de 2 a 7 de la mañana “¿Qué haces despierto a estas horas?”. 
Por ejemplo, en el caso de que sean las 15h, el programa diría “Buenas tardes”. 
*/

// Obtener la hora actual
let ahora = new Date();
let hora = ahora.getHours();

// Decidir el saludo en función de la hora
if (hora >= 7 && hora < 12) {
  alert("Buenos días");
} else if (hora >= 12 && hora < 20) {
  alert("Buenas tardes");
} else if (hora >= 20 || hora < 2) {
  alert("Buenas noches");
} else if (hora >= 2 && hora < 7) {
  alert("¿Qué haces despierto a estas horas?");
}