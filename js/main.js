const iva= 1.21;
const carrito = [];
let total= 0;

// Constructor de Producto
function Producto (nombre, precio, cantidad){
    this.nombre = nombre,
    this.precio = precio,
    this.cantidad = cantidad
}
// Inicio
prompt("Bienvenido al sistema de compras. Se les  mostraran los productos por pantalla, ingrese la cantidad que desea de cada uno, al finalizar le indicará el total. Presione aceptar para continuar.");

let cantidad1 = prompt('Remera tema cucurucho, precio lista $500. Cantidad:');
let producto1 = new Producto('Remera tema cucurucho', 500, cantidad1);
carrito.push(producto1);

let cantidad2 = prompt('Remera tema sunday, precio lista $500. Cantidad:');
let producto2 = new Producto('Remera tema sunday', 500, cantidad2);
carrito.push(producto2);

let cantidad3 = prompt('Remera tema palito, precio lista $500. Cantidad:');
let producto3 = new Producto('Remera tema palito', 500, cantidad3);
carrito.push(producto3);

let cantidad4 = prompt('Remera tema helado, precio lista $500. Cantidad:');
let producto4 = new Producto('Remera tema helado', 500, cantidad4);
carrito.push(producto4);

let cantidad5 = prompt('Calendario de helado, precio lista $70. Cantidad:');
let producto5 = new Producto('Calendario de helado', 70, cantidad5);
carrito.push(producto5);

let cantidad6 = prompt('Poster de helado, precio lista $200. Cantidad:');
let producto6 = new Producto('Poster de helado', 200, cantidad6);
carrito.push(producto6);

// Calculo total de carrito
carrito.forEach(producto => {
    total+= (producto.precio * producto.cantidad);
});
// agrego el Iva
total= total*iva;

// Devuelvo el total
prompt("El TOTAL de la compra es: $", total);

carrito.forEach(producto => {
    alert(producto.nombre, "precio: "+ producto.precio +"cantidad: " + producto.cantidad);
});