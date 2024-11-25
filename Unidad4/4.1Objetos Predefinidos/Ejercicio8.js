//Escribe una expresión regular que valide una dirección de correo electrónico en el formato más común: usuario@dominio.com.
function validadorCorreo(texto){
    let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let resultado = regExp.exec(texto);
    if(resultado != null){
        return true;
    }else{
        return false;
    }
}
console.log(validadorCorreo("juan.perez@example.com"));
console.log(validadorCorreo("juan@ex@ample.com"));
console.log(validadorCorreo("@dominio.com"));
console.log(validadorCorreo("jose_juan@dominio.es"));
