function factorial(n){
    if(n == 0){
        //Caso base
        return n = 1;
    }else{
        //Caso relativo
        return n*factorial(n-1);
    }
}

let elementos = 7;
for(let i=0; i<elementos; i++) console.log(factorial(i));
