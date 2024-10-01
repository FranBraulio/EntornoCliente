let serie = new Array(1,33,100,2,6);
let pequeños = new Array;
let grandes = new Array;

let average = 0;
for(let i = 0; i < serie.length; i++){
    average += serie[i];
}
average = average / serie.length;
for(let i = 0; i < serie.length; i++){
    if(serie[i] >= average){
        grandes.push(serie[i]);
    }else{
        pequeños.push(serie[i]);
    }
}
console.log(serie);
console.log(grandes);
console.log(pequeños);