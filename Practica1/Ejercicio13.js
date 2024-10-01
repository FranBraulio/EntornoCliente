let numeroLimones = Number(prompt("Pon el numero de limones"));
if (isNaN(numeroLimones) || numeroLimones < 0) {
    console.log("Por favor, introduce un número válido.");
}

for (let i = 1; i <= numeroLimones; i++) {
    if (i == numeroLimones) {
        console.log(`¡¡¡Y ${i} LIMONES Y MEDIO LIMÓN!!!`);
    } else if (i == 1) {
        console.log(`${i} limón, y medio limón.`);
    } else {
        console.log(`${i} limones, y medio limón.`);
    }
}


  