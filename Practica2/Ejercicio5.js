//Ejercicio5
let arrayRandom = new Array(10);
for(let i = 0; i < arrayRandom.length; i++){
    let numRandom = Math.random() * 4 + 1;
    numRandom = Math.round(numRandom);
    arrayRandom[i] = numRandom;
}
let arrayConAsteriscos = new Array(10);

for(let i = 0; i < arrayConAsteriscos.length; i++){
    let asteriscos = "* ";
    arrayConAsteriscos[i] = asteriscos.repeat(arrayRandom[i]);
    console.log(arrayConAsteriscos[i]);
}
