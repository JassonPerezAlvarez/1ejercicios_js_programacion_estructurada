//Usando corchetes []:  
let arreglo = [1, 2, 3, "texto", true];

//Usando el constructor Array:  
let arreglo = new Array(1, 2, 3); 

// Arreglo vacío: 
let arreglo = []; 

// metodo  push
let numeros = [1, 2, 3]; 
let longitud = numeros.push(4, 5); 
console.log(numeros); // [1, 2, 3, 4, 5] 
console.log(longitud); // 5 

// metodo unshift
let letras = ['b', 'c']; 
let longitud = letras.unshift('a'); 
console.log(letras); // ['a', 'b', 'c'] 
console.log(longitud); // 3 


// metodo pop
let frutas = ['manzana', 'banana', 'naranja']; 
let ultima = frutas.pop(); 
console.log(frutas); // ['manzana', 'banana'] 
console.log(ultima); // 'naranja' 


// metodo shift
let colores = ['rojo', 'verde', 'azul']; 
let primero = colores.shift(); 
console.log(colores); // ['verde', 'azul'] 
console.log(primero); // 'rojo' 


// metodo indexOf
let numeros = [10, 20, 30, 20, 40]; 
let indice = numeros.indexOf(20); // 1 
let indiceDesde2 = numeros.indexOf(20, 2); // 3 
console.log(indice); // 1 
console.log(indiceDesde2); // 3 

// metodo length}
let arreglo = [1, 2, 3]; 
console.log(arreglo.length); // 3 
arreglo.length = 1; // Trunca a [1] 
arreglo.length = 5; // Extiende a [1, undefined, undefined,  undefined, undefined] 



// metodo sort([comparador]
let numeros = [3, 1, 4, 2]; 
numeros.sort((a, b) => a - b); // Orden ascendente console.log(numeros); // [1, 2, 3, 4] 

// metodo  join(separador)
let palabras = ['hola', 'mundo']; 
let texto = palabras.join(' '); // 'hola mundo' 


// metodo concat(arreglo1, arreglo2, ...)
let arr1 = [1, 2]; 
let arr2 = [3, 4]; 
let combinado = arr1.concat(arr2, [5]); 
console.log(combinado); // [1, 2, 3, 4, 5] 

// metodo forEach(callback(elemento, indice, arreglo))
let colores = ['rojo', 'verde', 'azul']; 
colores.forEach(color => console.log(color)); 
// Imprime: rojo, verde, azul 

// metodo map(callback(elemento, indice, arreglo))
let numeros = [1, 2, 3]; 
let dobles = numeros.map(x => x * 2); 
console.log(dobles); // [2, 4, 6] 

// metodo filter(callback(elemento, indice, arreglo)
let numeros = [1, 2, 3, 4]; 
let pares = numeros.filter(x => x % 2 === 0); 
console.log(pares); // [2, 4] 

// metodo reduce(callback(acumulador, elemento, indice, arreglo), [valorInicial])
let numeros = [1, 2, 3, 4]; 
let suma = numeros.reduce((acc, curr) => acc + curr, 0); console.log(suma); // 10 

// metodo .some(callback(elemento, indice, arreglo)):

let numeros = [1, 2, 3, 4]; 
let hayPares = numeros.some(x => x % 2 === 0);

// metodo every(callback(elemento, indice, arreglo)):
let numeros = [2, 4, 6, 8]; 
let todosPares = numeros.every(x => x % 2 === 0); console.log(todosPares); // true 

// metodo find(callback(elemento, indice, arreglo))
let numeros = [1, 2, 3, 4]; 
let encontrado = numeros.find(x => x > 2); 
console.log(encontrado); // 3 

// metodo findIndex(callback(elemento, indice, arreglo))
let numeros = [1, 2, 3, 4]; 
let indice = numeros.findIndex(x => x > 2); 
console.log(indice); // 2 

// metodo .entries
let colores = ['rojo', 'verde', 'azul']; 
let iterador = colores.entries(); 
console.log([...iterador]); 
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']] 

// metodo keys
let colores = ['rojo', 'verde', 'azul']; 
let iterador = colores.keys(); 
console.log([...iterador]); // [0, 1, 2] 

// metodo values
let colores = ['rojo', 'verde', 'azul']; 
let iterador = colores.values(); 
console.log([...iterador]); // ['rojo', 'verde', 'azul']

// metodo 