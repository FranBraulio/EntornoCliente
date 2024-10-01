let nombre = "Fran";
let apellidos = "Braulio";
let salario = 1212.12;
let edad = 22;

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

console.log("Nombre:",nombre,"Apellidos:",apellidos,"Edad:",edad,"Salario:",salario);