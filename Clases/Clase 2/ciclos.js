/*
  ¿Para qué sirve un ciclo?
  1. While - mientras que la condición se cumpla
  2. For - tiene una variable, que va aumentando y igual tiene una condición
*/
//                0          1        2          3             4
const arreglo = ["Oscar", "Juan", "Jonathan", "Melissa", "Kenneth"];

// Ciclo While
let i = 0;

// array.length devuelve la cantidad de elementos
console.log(arreglo.length);
//     5 < 5
while (i < arreglo.length) {
  console.log("While", arreglo[i]);
  i++;
}

let j = 0;
// Do...while, la diferencia es que corre por lo menos una vez
do {
  console.log("Do while", arreglo[j]);
  i++;
} while (false);

// For
//     2        2   < 5            2 + 1
for (let i = 0; i < arreglo.length; i++) {
  console.log("For", arreglo[i]);
}

/*
  Practica Ciclos
  1. Escriba una función que ordene 3 números de mayor a menor, NO SE VALE EL .SORT DE ARREGLOS
  2. Encuentre el número mayor de un arreglo de números, NO SE VALE EL .SORT
  3. Escriba un ciclo que itere los números del 0 al 15 y diga si son pares o impares
  4. Escriba un ciclo que imprima el siguiente patrón:
    *
    **
    ***
    ****
    *****
  */

// 1
function ordenar(numero1, numero, numero3) {
  // complete aquí
}
