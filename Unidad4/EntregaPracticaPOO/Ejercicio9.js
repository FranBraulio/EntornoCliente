class Punto2D{
    constructor(x,y){
        // Atributos de la clase Punto2D
        this.x = x;
        this.y = y;
    }

    mostrarCordenadas(){
        return (`X: ${this.x} Y: ${this.y}`);
    }

}


class Recta extends Punto2D{
    constructor(punto1, punto2){
        super(punto1.x, punto1.y);
        this.punto2 = punto2;
    }

    mostrarRecta(){
        return console.log(`Esta recta va del punto ${punto1.mostrarCordenadas()}, al punto ${punto2.mostrarCordenadas()}`);
    }

}

let punto1 = new Punto2D(2,5);
let punto2 = new Punto2D(3,1);
let recta = new Recta(punto1,punto2);
recta.mostrarRecta();
