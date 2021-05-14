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
  Para todos se vale usar arreglos
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
function ordenar(numero1, numero2, numero3) {
  const arregloNumeros = [numero1, numero2, numero3];
  while (
    arregloNumeros[0] < arregloNumeros[1] ||
    arregloNumeros[1] < arregloNumeros[2]
  ) {
    // Si el primero es menor que el segundo, los intercambia de lugar
    if (arregloNumeros[0] < arregloNumeros[1]) {
      const temporal = arregloNumeros[0];
      arregloNumeros[0] = arregloNumeros[1];
      arregloNumeros[1] = temporal;
    }

    if (arregloNumeros[1] < arregloNumeros[2]) {
      const temporal = arregloNumeros[1];
      arregloNumeros[1] = arregloNumeros[2];
      arregloNumeros[2] = temporal;
    }
  }

  return arregloNumeros;
}

const numerosOrdenados = ordenar(1, 2, 3);
console.log(numerosOrdenados);

function bubbleSort(numeros) {
  let auxiliar = 0;

  //  [6][3][5][4][2][1]
  //  [6][5][4][3][2][1]
  //   j j+1

  for (i = 1; i < numeros.length; i++) {
    for (j = 0; j < numeros.length - i; j++) {
      if (numeros[j] < numeros[j + 1]) {
        auxiliar = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = auxiliar;
      }
    }
  }

  console.log(numeros); // Mostramos, por consola, la lista ya ordenada
}

const numerosBurbuja = bubbleSort([1, 2, 3]);
console.log("Burbuja", numerosBurbuja);

// 2 function
function encontrarMayor(arregloNumeros) {
  let mayor = 0;

  for (let i = 0; i < arregloNumeros.length; i++) {
    if (arregloNumeros[i] > mayor) {
      mayor = arregloNumeros[i];
    }
  }

  return mayor;
}

const mayor = encontrarMayor([43, 56, 23, 89, 88, 90, 99, 652]);
console.log(mayor);

// 3
function parImpar() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par`);
    } else {
      console.log(`${i} es impar`);
    }
  }
}
parImpar();

/*
 *
 **
 ***
 ****
 *****
 */
function patron() {
  for (let linea = 1; linea <= 5; linea++) {
    let string = "";
    for (let asterisco = 0; asterisco < linea; asterisco++) {
      string += "*";
    }
    console.log(string);
  }
}

function Asteriscos(filasUsuario) {
  let tempAsteriscos = "";

  for (let filas = 0; filas < filasUsuario; filas++) {
    tempAsteriscos += "*";
    console.log(tempAsteriscos);
  }
}

// patron();
Asteriscos(5);
