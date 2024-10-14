function findPar(numeros){
    let cantNumeros = 0;
    for (let elemento of numeros){
        if(elemento % 2==0){
            cantNumeros++;
        }
    }

    return cantNumeros;
}

let numeros = new Array(1,2,3,4,5,6,7,8,9);

console.log(findPar(numeros));