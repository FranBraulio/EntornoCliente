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
const facturaJuan2 = new Factura(0, 100); // El idCliente coincide con la posición en la lista de clientes

// Imprimir la factura de Juan (estado inicial: pendiente)
facturaJuan.imprimir(clientes);

// Cobrar la factura de Juan y volver a imprimir
facturaJuan.cobrar();
facturaJuan.imprimir(clientes);
facturaJuan2.imprimir(clientes);




