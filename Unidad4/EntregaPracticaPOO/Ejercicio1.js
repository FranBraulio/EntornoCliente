let circulo = new Object();
circulo.radio = 7;
circulo.area = function(){
    return `(El area es: ${Math.PI * (circulo.radio * circulo.radio)})`;
}

console.log(circulo.area());