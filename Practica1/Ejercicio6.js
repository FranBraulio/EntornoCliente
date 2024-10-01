/*
Escribe un programa que pida al usuario una edad (en años) como entrada, convierta esa entrada a un número, y luego clasifique a la persona 
en una de las siguientes categorías según su edad:

    Menor de 12: "Niño"
    De 12 a 17: "Adolescente"
    De 18 a 64: "Adulto"
    65 o más: "Adulto mayor"

Si la edad no es un número, el programa debe mostrar el mensaje "Por favor, ingresa un número válido".
El programa deberá seguir pidiendo al usuario una edad hasta que este ingrese "salir".
*/

let entrada;

  while (entrada != "salir") {
    entrada = prompt("Por favor, ingresa tu edad (o escribe 'salir' para terminar):");

    // Si el usuario escribe 'salir', se termina el bucle
    if (entrada.toLowerCase() === "salir") {
      alert("Programa terminado.");
    }

    if(entrada != "salir"){
        // Convertir la entrada a número
    let edad = Number(entrada);

    // Verificar si la entrada es un número válido
        if (isNaN(edad) || edad < 0) {
            alert("Por favor, ingresa un número válido.");
        } else {
            // Clasificar según la edad
            if (edad < 12) {
                alert("Niño");
            } else if (edad >= 12 && edad <= 17) {
                alert("Adolescente");
            } else if (edad >= 18 && edad <= 64) {
                alert("Adulto");
            } else if (edad >= 65) {
                alert("Adulto mayor");
            }
        }
    }
  }

