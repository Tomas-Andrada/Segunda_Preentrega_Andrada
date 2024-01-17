const listaProductos = [
    { id: 1, nombre: "Ariculares", precio: 10 },
    { id: 2, nombre: "Mouse", precio: 15 },
    { id: 3, nombre: "Pad", precio: 20 },
    { id: 4, nombre: "Teclado", precio: 25 }
];
const obtenerProductoPorNombre = (nombre) => listaProductos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
const calcularDescuento = (precio, porcentajeDescuento) => (precio * porcentajeDescuento) / 100;

let productosComprados = [];
let precioTotal = 0;
console.log("Lista de productos:");
    listaProductos.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`);
    });
while (true) {
    let nombreProducto = prompt("Ingrese el nombre del producto que desea comprar (escriba 'fin' para finalizar):");
    if (nombreProducto.toLowerCase() === "fin") {
        break;
    }
    let producto = obtenerProductoPorNombre(nombreProducto);
    if (producto) {
        let cantidadStr = prompt(`Ingrese la cantidad de ${nombreProducto}:`);
        let cantidad = parseInt(cantidadStr);
        if (!isNaN(cantidad) && cantidad > 0) {
            let productoExistente = productosComprados.find(item => item.id === producto.id);
            if (productoExistente) {
                productoExistente.cantidad += cantidad;
            } else {
                productosComprados.push({ ...producto, cantidad });
            }
            precioTotal += producto.precio * cantidad;
        } else {
            alert("Por favor, ingrese una cantidad válida mayor a cero.");
        }
    } else {
        alert("Producto no encontrado. Por favor, ingrese un producto válido.");
    }
}

let formaPago = prompt("Ingrese la forma de pago (debito, credito o efectivo):").toLowerCase();
let porcentaje = 0;

switch (formaPago) {
    case "debito":
    case "credito":
        porcentaje = 10;
        break;
    case "efectivo":
        porcentaje = 20;
        break;
    default:
        console.log("Forma de pago no reconocida. No se aplica descuento.");
}

let descuento = calcularDescuento(precioTotal, porcentaje);
let precioFinal = precioTotal - descuento;

console.log("Productos comprados:");
productosComprados.forEach(producto => {
    console.log(`${producto.nombre} - Cantidad: ${producto.cantidad} - Precio total: $${(producto.precio * producto.cantidad).toFixed(2)}`);
});

console.log("Precio total de la compra (sin descuento): $" + precioTotal.toFixed(2));
console.log("Forma de pago: " + formaPago);
console.log("Porcentaje de descuento aplicado: " + porcentaje + "%");
console.log("Monto del descuento: $" + descuento.toFixed(2));
console.log("Precio final después del descuento: $" + precioFinal.toFixed(2));