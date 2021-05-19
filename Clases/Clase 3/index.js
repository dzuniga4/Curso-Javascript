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
 * 1. Escriba una función que imprima en consola "Hola Mundo!".
 * 2. Escriba una función que reciba una variable y diga si la variable es string o no.\
 * 3. Escriba una función que revise si un string está vacío o no. ('')
 * 4. Escriba un string con nombre y apellido juntos y lo separe en un arreglo de strings.
 *    con el nombre de primero y el apellido de segundo. str.split(' ') 'Luis Cascante' => ['Luis', 'Cascante']
 * 5. Escriba una función que extraiga solo los primeros n caracteres de un string. str.slice(0, n)
 * 6. Escriba una función que reciba nombre y apellido y devuelva las iniciales.
 *    str.split 'Luis Cascante' => 'L.C'
 * 7. Escriba una función que ponga la primera letra en mayúscula. 'luis' => 'Luis'
 *
 * Objetos
 *     ------------- TODAS RECIBEN EL OBJETO COMO PARÁMETRO TAMBIÉN ---------------------
 * 1. Escriba una función que imprima las LLAVES de los atributos de un objeto.
 * 2. Escriba una función que imprima los VALORES de los atributos de un objeto.
 * 3. Escriba una función que elimine un atributo de un objeto, recibe el nombre del atributo como parámetro.
 * 4. Escriba una función que devuelva la longitud o cantidad de atributos de un objeto.
 * 5. Escriba una función que agregue un atributo a un objeto, recibe el nombre del atributo y el valor.
 * 6. Escriba una función que actualice el valor de un atributo en un objeto,
 *    recibe el nombre del atributo y el valor.
 * 7. Escriba una función que revise si un objeto tiene un atributo, recibe el nombre del atributo.
 *
 * Ciclos
 * 1. Escriba una función que reciba un objeto y devuelva un arreglo de llaves/valor. ['llave', 'valor']
  * const obj = {
      nombre: 'Luis',
      apellido: 'Cascante'
    }

    [['nombre', 'Luis'], ['apellido', 'Cascante']]
 * 2. Escriba una función que reciba un objeto y cree una copia cambiando las llaves por lo valores
 *    y los valores por las llaves.
 * 3. Escriba una función que reciba un arreglo de objetos y los ordene de mayor a menor por el atributo id.
 * 4. Escriba una función que reciba un número y le dé la vuelta.
 * 5. Escriba una función que reciba un string y diga si es palíndromo o no. (se escribe igual al revés)
 * 6. Escriba una función que reciba un string y encuentre la palabra más grande del string
 *
 * General
 * 1. Escriba una función que reciba un arreglo y una función y ejecute la función en cada elemento del arreglo.
 * 2. Escriba una función que reciba dos objetos y diga si todos sus atributos y valores son iguales o no.
 * 3. Escriba una función que reciba n números, sume todos y devuelva el resultado de la suma.
 * 4. Escriba una función que reciba dos arreglos y elimine del primero los elementos que aparecen en el segundo.
 * 5. Escriba una función que reciba un arreglo y una función, si la función devuelve true agrega el elemento a un primer arreglo y sino a un segundo arreglo, devuelve los dos.
 */

// Strings
function esStringVacio(string) {
  // if(string === ""){
  //   return true;
  // }
  // else{
  //   return false
  // }
  return string === "" ? true : false;
}

function separarString(string) {
  return string.split(" ");
}

const string = separarString("Luis Cascante");
console.log(string);
