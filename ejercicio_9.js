// Crear una cola
let cola = [];
// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]


// Eliminar elementos (dequeue)
console.log(cola.shift()); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift()); // "Tarea 2"
console.log(cola); // ["Tarea 3"]




// Crear una pila
let pila = [];
// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

console.log(pila);

// Eliminar elementos (pop)
console.log(pila.pop()); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop()); // "Plato 2"
console.log(pila); // ["Plato 1"]


// areglo paras colas
let colaTareas = [];

// accion par agregar al final
const agregarAlfinal = (tarea) => {
colaTareas.push(tarea);
console.log(`tarea agregada: $ {tarea}. cola actual: $ {colaTareas}`);

};
// Accion para remover del inicio
const removerDelInicio = () => {
    if (colaTareas.length === 0) {
        console.log("cola vacia.");
        return tareaProcesada;
    }
    const tareaProcesada = colaTareas.shift();
    console.log(`tarea procesda: ${tareaProcesada}. cola actual: ${colaTareas}`);
    return tareaProcesada;
};


// simulacion del proceso 
agregarAlfinal("tarea A");
agregarAlfinal("Tarea B");
agregarAlfinal("Tarea C");
removerDelInicio();
removerDelInicio();
removerDelInicio();