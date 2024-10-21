function sumaNumeros(n){
    if(n === 1){
        //Caso base
        return n = 1;
    }else{
        //Caso reltivo
        return n = n+sumaNumeros(n-1);
    }
}

console.log(sumaNumeros(5))