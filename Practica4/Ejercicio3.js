function esPrimo(numero){
     // Solo necesitamos verificar hasta la raíz cuadrada del número
     for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Al poder dividirse entre otro numero no es primo
        }
    } 
    return true; // No se encontró ningún divisor, es primo
}

