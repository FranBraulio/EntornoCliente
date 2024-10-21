
// Función que calcula el factorial de un número usando un bucle 'for'.
function factorialFor(n){
    let m = 1; // Inicializamos m a 1, que será el acumulador de la multiplicación.
    // Bucle for que se ejecuta n veces, multiplicando m por el valor de i en cada iteración.
    for(let i = 1; i <= n; i++){
        m *= i; // Multiplicamos el acumulador por el valor actual de i.
    }
    return m; // Devolvemos el valor final del acumulador, que será el factorial de n.
}

// Función que calcula el factorial de un número usando un bucle 'while'.
function factorialWhile(n){
    let m = 1; // Inicializamos m a 1, que será el acumulador de la multiplicación.
    let i = 1; // Inicializamos i a 1, que será nuestro contador.
    // El bucle while se ejecuta mientras i sea menor o igual a n.
    while (i <= n){
        m *= i; // Multiplicamos el acumulador por i.
        i++; // Incrementamos i en cada iteración.
    }
    return m; // Devolvemos el valor final del acumulador, que será el factorial de n.
}
