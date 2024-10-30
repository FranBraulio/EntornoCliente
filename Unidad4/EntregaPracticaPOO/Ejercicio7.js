//declaro el objeto literal
let punto = {
    x: 0,
    _y: 0,
    _z: 0,
    set y(x){
        // Setter para calcular el valor de Y
        this._y = x * 2;
    },

    get y(){
        // Getter para coger el valor de Y
        return this._y;
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
            return 1;
        } else if(this.x < 0 & this.y > 0){
            return 2;
        } else if(this.x < 0 & this.y < 0){
            return 3;
        } else if(this.x > 0 & this.y < 0){
            return 4;
        } else{
            return 0;
        }
    },

    //Funcion arrow
    //No uso this para que no de error
    distancia: () => {return Math.sqrt(punto.x ** 2 + punto._y ** 2)},

    mostrar_coordenadas : function(){
        return `(${this.x},${this.y},${this.z})`;
    },

    mostrar_cuadrante : function(){
        return `(${this.cuadrante})`;
    }
}

punto.x = 5;
punto.y = punto.x;
punto.z = 3;
console.log(punto.distancia());
console.log(punto.mostrar_coordenadas());
console.log(punto.mostrar_cuadrante());


