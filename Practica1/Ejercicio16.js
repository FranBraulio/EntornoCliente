let notas = [];
let seguir = true; 
while (seguir) {
    let nota = Number(prompt("Ingresa una nota (0 a 100):"));
    
    if (nota >= 0 && nota <= 100) {
        notas.push(nota);
    } else {
        alert("Por favor ingresa una nota válida entre 0 y 100.");
    }

    seguir = confirm("¿Deseas ingresar otra nota?");
}
console.log(notas.length);

let mayor = notas[0];
for(let i = 1; i < notas.length; i++){
    if(notas[i] > notas[i-1]){
        mayor = notas[i];
    }
}
console.log("Numero mayor "+mayor);


let menor = notas[0];
for(let i = 1; i < notas.length; i++){
    if(notas[i] < notas[i-1]){
        menor = notas[i];
    }
}
console.log("Numero menor "+menor);

let average = 0;
for(let i = 0; i < notas.length; i++){
    average += notas[i];
}
average = average / notas.length;
console.log("Media de notas "+average);
if(average >= 70){
    console.log("Promedio aprobado")
}else{
    console.log("Promedio reprobado")
}
