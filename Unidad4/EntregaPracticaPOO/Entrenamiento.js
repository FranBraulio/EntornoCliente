class Vehiculo{
    constructor(brand, model, manufacturingYear, price ){
        this.brand = brand;
        this.model = model;
        this.manufacturingYear = manufacturingYear;
        this.price = price;
    }

    mostrarInfo(){
        return `${this.brand} ${this.model}, año${this.manufacturingYear}, ${this.price}€`;
    }
}

class Coche extends Vehiculo{
    constructor(brand, model, manufacturingYear, price, numDoors, ){
        super(brand, model, manufacturingYear, price);
        this.numDoors = numDoors;
    }

    mostrarInfo(){
        return `${super.mostrarInfo()}, numero de puertas: ${this.numDoors}`;
    }
}

class Motos extends Vehiculo{
    constructor(brand, model, manufacturingYear, price, cruiser, recto, tracker ){
        super(brand, model, manufacturingYear, price);
        this.cruiser = cruiser;
        this.recto = recto;
        this.tracker = tracker;
    }

    mostrarInfo(){
        return `${super.mostrarInfo()} cruiser ${this.cruiser}, recto ${this.recto}, tracker ${this.tracker}`;
    }
}

class Concesionario{
    constructor(listaDeVehiculos){
        this.listaDeVehiculos = listaDeVehiculos;
    }

    addVehiculo(vehiculo){
        this.listaDeVehiculos.push(vehiculo);
    }

    listadoDeAlmacen(){
        for(let i = 0; i < this.listaDeVehiculos.length; i++){
            console.log(this.listaDeVehiculos[i].mostrarInfo());
        }
    }
}

// Crear vehículos individuales
const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2019, 15000);
const coche1 = new Coche("Honda", "Civic", 2020, 18000, 4);
const coche2 = new Coche("Ford", "Mustang", 2021, 30000, 2);
const moto1 = new Motos("Yamaha", "MT-07", 2021, 7500, true, false, false);
console.log("INFORMACION DE UNA MOTO ESPECIFICA");
console.log(moto1.mostrarInfo());


// Crear una lista y un concesionario
const listaDeVehiculos = [vehiculo1, coche1, coche2, moto1];
const concesionario = new Concesionario(listaDeVehiculos);
console.log("LISTADO DEL CONCESIONARIO");
concesionario.listadoDeAlmacen();

// Agregar un vehículo adicional
const moto2 = new Motos("Harley-Davidson", "Iron 883", 2019, 9000, true, true, false);
concesionario.addVehiculo(moto2);

// Listar los vehículos en el concesionario
console.log("LISTADO DEL CONCESIONARIO ACTUALIZADO");
concesionario.listadoDeAlmacen();

