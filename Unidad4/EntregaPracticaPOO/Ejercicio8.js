class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}, Teléfono: ${this.telefono}`);
    }
}

class Factura {
    static #idFactura = 0;
    constructor(idCliente, importe) {
        this.idFactura = Factura.generarIdFactura();
        this.idCliente = idCliente;
        this.importe = importe;
        this.estado = "pendiente";
    }

    static generarIdFactura(){
        return ++Factura.#idFactura;
    }

    cobrar() {
        this.estado = "pagada";
    }

    imprimir(clientsList) {
        const cliente = clientsList[this.idCliente];
        console.log(`Factura:
        Id Factura: ${this.idFactura}
        Cliente: ${cliente.nombre}
        Email: ${cliente.email}
        Teléfono: ${cliente.telefono}
        Importe: ${this.importe}€
        Estado: ${this.estado}`);
    }
}

class FacturaDetallada extends Factura {
    constructor(idCliente) {
        super(idCliente);
        this.articulos = []; // Array para almacenar los artículos
    }

    //Metodo para añadir articulo
    añadirArticulo(nombre, precio) {
        this.articulos.push({ nombre, precio });
    }

    // Método para imprimir la factura detallada
    imprimirFacturaDetallada(clientsList) {
        const cliente = clientsList[this.idCliente];
        console.log(`Factura Detallada:
        Id Factura: ${this.idFactura}
        Cliente: ${cliente.nombre}
        Email: ${cliente.email}
        Teléfono: ${cliente.telefono}
        Estado: ${this.estado}
        Artículos:`);

        let totalArticulos = 0;
        this.articulos.forEach((articulo, index) => {
            console.log(`${index + 1}. ${articulo.nombre} - ${articulo.precio}€`);
            totalArticulos += articulo.precio;
        });

        console.log(`Total Artículos: ${totalArticulos}€
        Total a Pagar: ${totalArticulos}€`);
    }
}


// Crear lista de clientes
const clientes = [
    new Cliente("Juan", "juan@mail.com", "634567187"),
    new Cliente("Teresa", "teresa@mail.com", "655561231"),
    new Cliente("Luis", "luis@mail.com", "602354322")
];

//Mostrar por consola los clientes
for(let i = 0; i < clientes.length; i++){
    clientes[i].mostrarDatos();
}

// Crear factura para el primer cliente (Juan)
const facturaJuan = new Factura(0, 300); // El idCliente coincide con la posición en la lista de clientes

// Imprimir la factura de Juan (estado inicial: pendiente)
facturaJuan.imprimir(clientes);

// Cobrar la factura de Juan y volver a imprimir
facturaJuan.cobrar();
facturaJuan.imprimir(clientes);

// Crear una factura detallada para el primer cliente
const facturaDetalladaJuan = new FacturaDetallada(0);

// Añadir artículos a la factura
facturaDetalladaJuan.añadirArticulo("Monitor", 150);
facturaDetalladaJuan.añadirArticulo("Teclado", 30);
facturaDetalladaJuan.añadirArticulo("Ratón", 20);

// Imprimir la factura detallada
facturaDetalladaJuan.imprimirFacturaDetallada(clientes);

// Cobrar la factura y volver a imprimir
facturaDetalladaJuan.cobrar();
facturaDetalladaJuan.imprimirFacturaDetallada(clientes);





