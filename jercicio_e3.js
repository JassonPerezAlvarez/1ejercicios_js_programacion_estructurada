
 
// Función anónima asignada a una variable
const sumar = function(a, b) {
return a + b;
};
console.log(sumar(3, 4));
// Función con asignación de nombre
function sumar (a, b) {
return a + b;
};
console.log(sumar(3, 4));

// Sintaxis normal
const multiplicar = function(a, b) {
return a * b;
};
// Función flecha
const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(3, 4)); // 12

const edad = 19;
const tieneID = true;
if (edad >= 18) {
if (tieneID) {
console.log("Acceso permitido");
} else {
console.log("Necesitas identificación");
}
} else {
console.log("Eres menor de edad");
}


for (let i = 1; i <= 3; i++) {
for (let j = 1; j <= 2; j++) {
console.log(`i=${i}, j=${j}`);
}
}



try {
console.log("Intentando dividir...");
let resultado = 10 / 0; // No error real, da Infinity
console.log(resultado);
} catch (error) {
console.log("Error atrapado:", error.message);
} finally {
console.log("Fin del bloque");
}



function dividir(a, b) {
try {
if (b === 0) {
throw new Error("No se puede dividir entre 0");
}
return a / b;
} catch (error) {
return "Error: " + error.message;
}
}


const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"

const persona = {
nombre: "Ana",
hobbies: ["leer", "pintar", "correr"]
};


const personas = [
{ nombre: "Luis", edad: 30 },
{ nombre: "Marta", edad: 25 }
];
console.log(personas[0].nombre); // "Luis"
console.log(personas[1].edad); // 25


const usuario = { nombre: "Ana", "correo ": "ana@mail.com" };
console.log(usuario["nombre"]); // "Ana"
console.log(usuario["correo-personal"]); // "ana@mail.com"




const empresa = {
nombre: "TechCorp",
empleados: [
{
nombre: "Ana",
direccion: { ciudad: "Madrid", codigoPostal: 28001 }
},
{
nombre: "Luis",
direccion: { ciudad: "Barcelona", codigoPostal: 08001 }
}
]
};
// Ejemplos de acceso
console.log(empresa.empleados[0].nombre);
// "Ana"
console.log(empresa.empleados[1].direccion.ciudad);
// "Barcelona"
console.log(empresa.empleados[0]["direccion"]["codigoPostal"]);
// 28001
// El último también se puede escribir de esta forma:
console.log(empresa.empleados[0].direccion.codigoPostal);



// 1. Función flecha que muestra el nombre de la persona
const mostrarNombre = (obj) => {
    console.log("Nombre:", obj.nombre);
};

// 2. Función flecha que muestra la edad de la persona
const mostrarEdad = (obj) => {
    console.log("Edad:", obj.edad);
};

// 3. Función flecha que muestra la ciudad donde vive
const mostrarCiudad = (obj) => {
    console.log("Ciudad:", obj.direccion.ciudad);
};

// 4. Función flecha que muestra el código postal usando corchetes
const mostrarCodigoPostal = (obj) => {
    console.log("Código Postal:", obj["direccion"]["codigoPostal"]);
};

// 5. Función flecha que muestra el segundo hobby de la persona
const mostrarSegundoHobby = (obj) => {
    console.log("Segundo hobby:", obj.hobbies[1]);
};



/ Objeto persona
const persona = {
    nombre: "Carlos",
    edad: 28,
    direccion: {
        ciudad: "Madrid",
        codigoPostal: 28001
    },
    hobbies: ["leer", "correr", "pintar"]
};

// 1. Mostrar el nombre de la persona
const mostrarNombre = (obj) => {
    console.log("Nombre:", obj.nombre);
};

// 2. Mostrar la edad de la persona
const mostrarEdad = (obj) => {
    console.log("Edad:", obj.edad);
};

// 3. Mostrar la ciudad donde vive
const mostrarCiudad = (obj) => {
    console.log("Ciudad:", obj.direccion.ciudad);
};

// 4. Mostrar el código postal usando corchetes
const mostrarCodigoPostal = (obj) => {
    console.log("Código Postal:", obj["direccion"]["codigoPostal"]);
};

// 5. Mostrar el segundo hobby de la persona
const mostrarSegundoHobby = (obj) => {
    console.log("Segundo hobby:", obj.hobbies[1]);
};

// Llamadas de prueba
mostrarNombre(persona);
mostrarEdad(persona);
mostrarCiudad(persona);
mostrarCodigoPostal(persona);
mostrarSegundoHobby(persona);



/ 1. Muestra el nombre de la universidad
const mostrarNombreUniversidad = (obj) => {
    console.log("Nombre de la Universidad:", obj.nombre);
};

// 2. Muestra la calle donde está ubicada
const mostrarCalle = (obj) => {
    console.log("Calle:", obj.direccion.calle);
};

// 3. Muestra el nombre de la primera facultad
const mostrarPrimeraFacultad = (obj) => {
    console.log("Primera facultad:", obj.facultades[0].nombre);
};

// 4. Muestra el nombre de la segunda carrera en la primera facultad
const mostrarSegundaCarreraPrimeraFacultad = (obj) => {
    console.log("Segunda carrera de la primera facultad:", obj.facultades[0].carreras[1].nombre);
};

// 5. Muestra el nombre del primer estudiante de la carrera de Informática
const mostrarPrimerEstudianteInformatica = (obj) => {
    console.log("Primer estudiante de Informática:", obj.facultades[0].carreras[0].estudiantes[0].nombre);
};

// 6. Muestra el segundo hobby de Laura
const mostrarSegundoHobbyLaura = (obj) => {
    console.log("Segundo hobby de Laura:", obj.facultades[0].carreras[0].estudiantes[1].hobbies[1]);
};

// 7. Muestra la edad de Sofía
const mostrarEdadSofia = (obj) => {
    console.log("Edad de Sofía:", obj.facultades[0].carreras[1].estudiantes[0].edad);
};

// 8. Muestra el primer hobby del estudiante de Derecho Penal
const mostrarHobbyDerechoPenal = (obj) => {
    console.log("Primer hobby de estudiante de Derecho Penal:", obj.facultades[1].carreras[0].estudiantes[0].hobbies[0]);
};



