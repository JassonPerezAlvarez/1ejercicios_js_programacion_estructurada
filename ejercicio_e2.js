// 1
let nombre = "Jasson Perez Alvarez";
console.log(nombre);

// 2
let edad = 21;
let ciudad = "San Miguelito";
console.log(edad, ciudad);

// 3
const PI = 3.1416;
console.log(PI);

// 4
let num1 = 8, num2 = 12, num3 = 20;
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// 5
let esMayorDeEdad = true;
console.log(esMayorDeEdad);



// 6
let a = 5, b = 7;
console.log("Suma:", a + b);

// 7
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// 8
console.log("Potencia:", a ** b);

// 9
let precio = 1000;
let descuento = 20; // %
let precioFinal = precio - (precio * descuento / 100);
console.log("Precio final:", precioFinal);


// 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}



// 13
function saludar(nombre) {
    console.log("Hola, " + nombre);
}
saludar("Jasson");

// 14
function sumar(x, y) {
    return x + y;
}
console.log(sumar(4, 6));

// 15
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4));
console.log(esPar(7));

// 16
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log(areaRectangulo(5, 10));



// 17
const multiplicar = (x, y) => x * y;
console.log(multiplicar(4, 5));

// 18
const convertirCelsiusAFahrenheit = c => (c * 9/5) + 32;
console.log(convertirCelsiusAFahrenheit(0)); // 32°F

// 19
const mayorDeDos = (x, y) => x > y ? x : y;
console.log(mayorDeDos(10, 20));

// 20
const calcularIVA = precio => precio * 1.15;
console.log(calcularIVA(100));



// 21
let nombres = ["jasson", "jeyner", "skeyling", "Sofía", "yaleska"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22
let numeros = [5, 12, 8, 20, 15];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23
let palabras = ["El", "jasson", "tiene", "un", "gemelo"];
for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i], "tiene", palabras[i].length, "letras");
}

// 24
let persona = {
    nombre: "jasson",
    edad: 20,
    ciudad: "san miguelito"
};
for (let clave in persona) {
    console.log(clave + ":", persona[clave]);
}

// 25
let productos = [
    { nombre: "victoria clasica", precio: 55 },
    { nombre: "enza", precio: 40 },
    { nombre: "victoria fross", precio: 45 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}