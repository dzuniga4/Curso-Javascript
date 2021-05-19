// Repaso
/**
 * Pasos para definir una función
 * 1. Escribir la palabra RESERVADA function.
 * 2. El nombre de la función, pero es OPCIONAL, si no tiene nombre se llama "función anónima."
 * 3. Parámetros, van dentro de paréntesis (), se dividen por comas.
 * 4. Llaves para definir el ALCANCE la función.
 * 5. La mayoría de las veces las funciones retornan algo. Se devuelven cosas con RETURN.
 */

// Error-First, la función maneja los posibles errores primero
function dividir(dividendo, divisor) {
  if (divisor === 0) {
    console.log("El divisor es 0");
    return null;
  }
  return dividendo / divisor;
}

function esNumero(variable) {
  if (typeof variable === "string") {
    return true;
  }
  return false;
}

function foo() {
  return "foo";
}

/**
 * Pasos para llamar una función
 * 1. Escribo el nombre de la función.
 * 2. Paréntesis.
 */

const resultado = esNumero(10);
console.log(resultado);

function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const persona = crearPersona("Nombre", "Apellido");
console.log(persona);

function crearArreglo(...parametros) {
  const nuevoArreglo = [...parametros, 20];
  return nuevoArreglo;
}

const arreglo = crearArreglo(1, 2, 3, 4, 5, 6, 7);
console.log(arreglo);

// Práctica

/**
 * Strings
 * 1. Escriba una función que imprima en consola "Hola Mundo!"
 * 2. Escriba una función que reciba una variable y diga si la variable es string o no.\
 * 2. Escriba una función que revise si un string está vacío o no.
 * 3. Escroba un string con nombre y apellido juntos y lo separe en un arreglo de strings,
 *    con el nombre de primero y el apellido de segundo.
 * 4. Escriba una función que extraiga solo los primeros n caracteres de un string.
 * 5. Escriba una función que reciba nombre y apellido y devuelva las iniciales.
 * 6. Escriba una función que ponga la primera letra en mayúscula
 */
