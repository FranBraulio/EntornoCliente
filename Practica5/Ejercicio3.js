function sumaNumeros(n){
    if(n === 1){
        return n = 1;
    }else{
        return n = n+sumaNumeros(n-1);
    }
}

console.log(sumaNumeros(5))