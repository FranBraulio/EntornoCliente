function factorial(n){
    let m = 1;
    for(let i = 1; i <= n; i++){
        m *= i;
    }
    return m;
}

let elementos = 7;
for(let i=0; i<elementos; i++){
    console.log(factorial(i));
}
