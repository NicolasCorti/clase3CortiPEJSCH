const carrito = [];

Object Producto (nombre, precio, cantidad){
this.nombre:nombre;
this.precio: precio;
this.cantidad: cantidad;
}


Let producto1= new Producto('Remera tema cucurucho', 500, 1);

carrito[0]=producto1;

Let producto2= new Producto('Calendario de helado', 70, 2);

carrito[1]=producto2;

Let producto3= new Producto('Poster de helado', 500, 1);
carrito[2]=producto3;

//Falta agregar el array carrito al foreach

for(producto of Producto){
console.log("PRODUCTO: ",this.nombre);
console.log("PRECIO: ",this.precio);
console.log("CANTIDAD: "this.cantidad);
}