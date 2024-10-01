/*
 Realizar un programa que pida al usuario o usuaria una fecha cualquiera. 
 El programa debe verificar si dicha fecha corresponde a Navidad. 
*/
let fechaInput = prompt("Añada la fecha en formato YYYY MM DD");
let fecha = new Date(fechaInput);
let mes = fecha.getMonth()+1;
let dia = fecha.getDate();
console.log(dia);

if(mes == 12 && dia == 25){
    document.getElementById("mensaje").textContent = "Feliz navidad!!!";
}else{
        document.getElementById("mensaje").textContent = "Aun no es navidad :v";
}