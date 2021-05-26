/**
 * Práctica de Arreglos
 *
 * 1. Escriba una función que reciba un contador, y un valor y cree un arreglo con la cantidad de valores que dice el contador. llenar(3, 'b') => ['b', 'b', 'b']
 * 2.Escriba una función que le dé vuelta a un arreglo. [1, 2, 3] => [3, 2, 1]
 * 3. Escriba una función que reciba dos arreglos y diga si son iguales  o no. [1, 2], [1, 2] = true
 * [2, 1], [1, 2] = false
 * 4. Escriba una función que reciba un arreglo de pares llave/valor y devuelva un objeto.
 *  [
      ['nombre', 'Luis'], 
      ['apellido', 'Cascante']
    ]
 * 
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
  *5. Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos duplicados, PERO no pueden usar el new Set() de JS. [1, 2, 3, 1, 2] => [1, 2, 3]
  *6. Escriba una función que reciba dos arreglos y devuelva la intersección. devolver los elementos que están en los dos arreglos. [1, 2, 3,4 ], [3,4,5, 6] => [3,4] 
  7. Escriba una función que reciba un variable y diga si es un arreglo.
  8. Escriba una función que reciba un arreglo y lo clone, es decir, devuelva un arreglo igual.
  9. Escriba una función que reciba un arreglo de strings y devuelva todos los strings concatenados.
  10. Escriba una función que reciba un número e inserte un '-' menos entre los números pares y un '*' asterico entre dos números impares. '134245780' => '1*34-2-45*78-0'.
  11. Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de posición al azar. Pueden usar Math.random()
  12. Escriba una función que encuentre los valores repetidos de un arreglo.
  13. Escriba una función que encuentre la diferencia de dos arreglos, es decir, devolver los valores que solo están en uno y no en el otro.[1, 2, 3,4 ], [3,4,5, 6] => [1,2, 5, 6]
  14. EXTRA EXTRA: Escriba una función que 'aplane' un arreglo. [[1, 2], 3, 4, 5 ,[6, 7, 8]] =
  [1, 2, 3, 4, 5, 6, 7, 8]
 */

function numeroParesImpar(valor) {
  let stringSplit = valor.split("");
  let stringEjemplo = "";

  for (let i = 0; i < stringSplit.length; i++) {
    if (
      parseInt(stringSplit[i]) % 2 === 0 &&
      parseInt(stringSplit[i + 1]) % 2 === 0
    ) {
      stringEjemplo = stringEjemplo + stringSplit[i] + "-";
    } else if (
      parseInt(stringSplit[i]) % 2 !== 0 &&
      parseInt(stringSplit[i + 1]) % 2 !== 0
    ) {
      stringEjemplo = stringEjemplo + stringSplit[i] + "*";
    } else {
      stringEjemplo = stringEjemplo + stringSplit[i];
    }
  }

  return stringEjemplo;
}
