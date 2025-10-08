const productos = [
    { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
    { id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
    { id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
    { id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
    { id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
    { id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
    { id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
    { id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
    { id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
    { id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
    { id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
    { id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
    { id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
    { id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
    { id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
    { id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
    { id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
    { id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
    { id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 },
    { id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
    { id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
    { id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
    { id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
    { id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
    { id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
    { id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
    { id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
    { id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
    { id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
    { id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];



// 1. Función que devuelve un nuevo arreglo con los nombres de todos los productos
const obtenerNombresProductos = (arr) => arr.map(producto => producto.nombre);

// 2. Función que retorna todos los productos de la categoría "Muebles"
const obtenerProductosMuebles = (arr) => arr.filter(producto => producto.categoria === "Muebles");

// 3. Función que devuelve el primer producto con precio mayor a 1000
const obtenerProductoCaro = (arr) => arr.find(producto => producto.precio > 1000);

// 4. Función que calcula el precio total del inventario (precio × stock de cada producto)
const calcularValorInventario = (arr) => arr.reduce((total, producto) => total + (producto.precio * producto.stock), 0);

// 5. Función que verifica si todos los productos tienen stock mayor a 0
const todosConStock = (arr) => arr.every(producto => producto.stock > 0);

// 6. Función que verifica si al menos un producto pertenece a la categoría "Electrodomésticos"
const tieneElectrodomesticos = (arr) => arr.some(producto => producto.categoria === "Electrodomésticos");

// 7. Función que devuelve una nueva lista de productos ordenada por precio de menor a mayor
const ordenarPorPrecioAsc = (arr) => [...arr].sort((a, b) => a.precio - b.precio);

// 8. Función que retorna los productos ordenados por nombre en orden alfabético inverso
const ordenarPorNombreDesc = (arr) => [...arr].sort((a, b) => b.nombre.localeCompare(a.nombre));

// 9. Función que devuelve todos los productos con stock menor a 10
const obtenerProductosBajoStock = (arr) => arr.filter(producto => producto.stock < 10);

// 10. Función que calcula el promedio de los precios de todos los productos
const calcularPromedioPrecios = (arr) => arr.reduce((sum, producto) => sum + producto.precio, 0) / arr.length;