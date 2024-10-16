//Funcion que cuenta los numeros Par
function findPar(numeros){
    //Contador de numeros pares
    let cantNumeros = 0;
    //Bucle para recorrer todos los numeros pasados como parametro
    for (let elemento of numeros){
        //Si el resto del elemento dividio 2 es = 0, significa que es par
        if(elemento % 2==0){
            cantNumeros++;
        }
    }

    return cantNumeros;
}

let numeros = new Array(1,2,3,4,5,6,7,8,9);

console.log(findPar(numeros));
