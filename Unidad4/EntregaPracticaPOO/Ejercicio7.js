//declaro el objeto literal
let punto = {
    x: 0,
    _z: 0,

    get y(){
        // Getter para coger el valor de Y
        return this.x * 2;
    },

    set z(arg1){
        // Setter para calcular el valor de Z
        this._z = Math.sqrt(this.x*arg1);
    },

    get z(){
        // Getter para coger el valor de Z
        return this._z;
    },
        // Getter para el cuadrante
    get cuadrante(){
        if(this.x > 0 & this.y > 0){
            return 1; //Cuadrante ++
        } else if(this.x < 0 & this.y > 0){
            return 2; //Cuadrante -+
        } else if(this.x < 0 & this.y < 0){
            return 3; //Cuadrante --
        } else if(this.x > 0 & this.y < 0){
            return 4; //Cuadrante +-
        } else{
            return 0;
        }
    },

    //Funcion arrow
    //No uso this para que no de error
    // esto (**) === (^) elevado a
    distancia: () => {return Math.sqrt(punto.x ** 2 + punto.y ** 2)},

    mostrar_coordenadas : function(){
        return `(${this.x},${this.y},${this.z})`;
    },

    mostrar_cuadrante : function(){
        return `(Esta en el cuadrante: ${this.cuadrante})`;
    }
}

punto.x = 2;
punto.y;
punto.z = 3;
console.log(punto.distancia());
console.log(punto.mostrar_coordenadas());
console.log(punto.mostrar_cuadrante());


