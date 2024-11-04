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
    }
}
//Convertir el objeto a formato JSON
let jsonString = JSON.stringify(punto, null, 2);

//Mostrar el JSON por consola
console.log(jsonString);