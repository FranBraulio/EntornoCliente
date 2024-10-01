let num1 = 11;
let num2 = 14;
let num3 = 8;
let arrayParaOrdenar = [num1,num2,num3];
let mayor = arrayParaOrdenar[0];
for(let i = 1; i < arrayParaOrdenar.length; i++){
    if(arrayParaOrdenar[i] > arrayParaOrdenar[i-1]){
        mayor = arrayParaOrdenar[i];
    }
}
console.log(mayor);