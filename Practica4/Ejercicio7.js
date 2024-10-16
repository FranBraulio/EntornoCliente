function comprobarDNI(dni){
    //Mapa con la tabla de las letras del dni obtenida en la pagina del gobierno español
    let tablaLetra = new Map([ [0,"T"], 
        [1,"R"], 
        [2,"W"], 
        [3,"A"],
        [4,"G"], 
        [5,"M"], 
        [6,"Y"], 
        [7,"F"], 
        [8,"P"], 
        [9,"D"], 
        [10,"X"], 
        [11,"B"], 
        [12,"N"], 
        [13,"J"],
        [14,"Z"], 
        [15,"S"], 
        [16,"Q"], 
        [17,"V"], 
        [18,"H"], 
        [19,"L"], 
        [20,"C"],
        [21,"K"],
        [22,"E"]
    ]);
    //Obtengo el numero del dni almacenando en la variable numeroDNI todos los caracteres del dni menos el ultimo.
    let numeroDni = dni.slice(0, -1);
    //Obtengo la letra del dni almacenando en la variable letraDNI el ultimo caracter de dni.
    let letraDni = dni.slice(-1).toUpperCase();
    //Utilizo la variable numeroDNI para sacar el retsto al dividrlo por 23
    //Este resto sera la key del map.
    let restoDni = numeroDni%23;
    //Si la letra coincide con el valor que devuelve la tabla al paner el resto devuelve true
    if(letraDni === tablaLetra.get(restoDni)){
        return true;
    }
    return false;
}


