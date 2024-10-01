let nombre = prompt("Escriba su nombre:");
let apellidos = prompt("Escriba sus apellidos:");
let salario = Number(prompt("Escriba su salario:"));
let edad = Number(prompt("Escriba su edad:"));

if(salario > 1000 && salario < 2000){
    if(edad > 45){
        salario =salario + salario * 0.03;
    }else if(edad <= 45){
        salario = salario + salario * 0.1;
    }
}else if(salario < 1000){
    if(edad < 30){
        salario = 1100;
    }else if(edad > 30 && edad < 45){
        salario =salario + salario * 0.03;
    }else{
        salario =salario + salario * 0.15;
    }
}
document.getElementById("mensaje").textContent = "Hola, su nombre es: "+nombre+" su apellido: "+apellidos+" su salario final es: "+salario+" y su edad es: "+edad;
