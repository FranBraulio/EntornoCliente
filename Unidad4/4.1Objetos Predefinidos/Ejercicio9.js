//Escribe una expresión regular que valide un número de teléfono en el formato estándar de muchos países. XXX-XXX-XXXX
function validadorNumero(texto){
    let regExp = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    let resultado = regExp.exec(texto);
    if(resultado != null){
        return true;
    }else{
        return false;
    }
}
console.log(validadorNumero("123-456-7890"));
console.log(validadorNumero("12-3456-7890"));
console.log(validadorNumero("123-456-78"));
console.log(validadorNumero("123-456-789O"));
