let inventario = new Map([]);

let stock = new Set();

function agregarProducto(){
    let nombreProducto = prompt("Escribe el nombre del producto");
    let precioProducto = prompt("Escribe el nombre del producto");
    if(inventario.has(nombreProducto)){
        console.log("Error: producto ya en el inventario");
    }else{
        inventario.set(nombreProducto,precioProducto);
        stock.add(nombreProducto);
    }
}

function borrarProducto(){
    let nombreProducto = prompt("Escribe el nombre del producto");
    if(inventario.has(nombreProducto)){
        inventario.delete(nombreProducto);
        stock.delete(nombreProducto);
    }else{
        console.log("Error: el producto no esta en el inventario");
    }
}

function actualizarPrecio(){
    let nombreProducto = prompt("Escribe el nombre del producto");
    let precioNuevo = prompt("Escribe el nuevo precio del producto");
    if(inventario.has(nombreProducto)){
        inventario.set(nombreProducto,precioNuevo);
    }else{
        console.log("Error: el producto no esta en el inventario");
    }
}

function mostrarInventario(){
    for (let [producto, precio] of inventario) {
        console.log(`${producto}: ${precio}`);
    }    
}

function mostrarStock(){
    for (let producto of stock){
        console.log(producto)
    }
}

