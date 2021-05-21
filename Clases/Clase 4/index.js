// Arreglos - Arrays

// Crear arreglos
const arregloEjemplo = [1, 2, 3, 4, 5, 6];
console.log(arregloEjemplo);

const arregloEjemplo1 = new Array(1, 2, 3, 4, 5, 6);
console.log(arregloEjemplo1);

const arregloVacio = new Array(4);
console.log(arregloVacio);

// Métodos comunes de los arreglos

const nuevoArreglo = arregloEjemplo.concat(arregloVacio);
console.log(nuevoArreglo);

const cantidad = arregloEjemplo.push(250);
console.log(arregloEjemplo);
console.log(cantidad);

const numero = arregloEjemplo.pop();
console.log(arregloEjemplo);
console.log(numero);

console.log(arregloEjemplo.length);

console.log(arregloEjemplo.includes(7));

console.log(arregloEjemplo.join("/"));
