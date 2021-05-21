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
 * 2. Escriba una función que reciba una variable y diga si la variable es string o no.
 * 3. Escriba una función que revise si un string está vacío o no. ('')
 * 4. Escriba un string con nombre y apellido juntos y lo separe en un arreglo de strings.
 *    con el nombre de primero y el apellido de segundo. str.split(' ') 'Luis Cascante' => ['Luis', 'Cascante']
 * 5. Escriba una función que extraiga solo los primeros n caracteres de un string. str.slice(0, n) str.substring(0, n)
 * 6. Escriba una función que reciba nombre y apellido (en un string juntos) y devuelva las iniciales.
 *    str.split 'Luis Cascante' => 'L.C'
 * 7. Escriba una función que ponga la primera letra en mayúscula. 'luis' => 'Luis'
 *
 * Objetos
 *     ------------- TODAS RECIBEN EL OBJETO COMO PARÁMETRO TAMBIÉN ---------------------
 * 1. Escriba una función que imprima las LLAVES de los atributos de un objeto.
 *  {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    ||

    ['nombre', 'apellido'].
  
 * 2. Escriba una función que imprima los VALORES de los atributos de un objeto.
    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    ||

    ['Luis', 'Cascante'].
 * 3. Escriba una función que elimine un atributo de un objeto, recibe el nombre del atributo como parámetro.

    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: nombre

    {
      apellido: 'Cascante'
    }
 * 4. Escriba una función que devuelva la longitud o cantidad de atributos de un objeto.

    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || 

    2
 * 5. Escriba una función que agregue un atributo a un objeto, recibe el nombre del atributo y el valor.

    {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: llave, valor

    {
      nombre: 'Luis',
      apellido: 'Cascante',
      llave: valor
    }
 * 6. Escriba una función que actualice el valor de un atributo en un objeto,
 *    recibe el nombre del atributo y el valor.
 *  
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: "nombre", "Pedro"

    {
      nombre: 'Pedro',
      apellido: 'Cascante',
    }
 * 7. Escriba una función que revise si un objeto tiene un atributo, recibe el nombre del atributo.
 *
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
    
    || parámetro: apellido

    true

 * Ciclos
 * 1. Escriba una función que reciba un objeto y devuelva un arreglo de llaves/valor. ['llave', 'valor']
  * const obj = {
      nombre: 'Luis',
      apellido: 'Cascante'
    }

    [
      ['nombre', 'Luis'], 
      ['apellido', 'Cascante']
    ]
 * 2. Escriba una función que reciba un objeto y cree una copia cambiando las llaves por lo valores
 *    y los valores por las llaves.
 * 
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }

    ||

    {
      Luis : 'nombre',
      Cascante: 'apellido'
    }
 * 3. Escriba una función que reciba un arreglo de objetos y los ordene de mayor a menor por el atributo id.
    [
      {
        id: 2,
        Luis : 'nombre',
        Cascante: 'apellido'
      },
      {
        id: 1,
        Luis : 'nombre',
        Cascante: 'apellido'
      }
    ]
    ||
    [
      {
        id: 1,
        Luis : 'nombre',
        Cascante: 'apellido'
      },
      {
        id: 2,
        Luis : 'nombre',
        Cascante: 'apellido'
      }
    ]
 * 4. Escriba una función que reciba un número (lo reciben como string) y le dé la vuelta.
    '32165' =>  '56123'
 * 5. Escriba una función que reciba un string y diga si es palíndromo o no. (se escribe igual al revés)
    'hannah' sí
    'anita lava la tina' sí
    "luis" => 'siul'   NO
 * 6. Escriba una función que reciba un string y encuentre la palabra más grande del string
 *  'anita lava la tina' => 'anita'
 * 
 * General
 * 1. Escriba una función que reciba un arreglo y una función y ejecute la función en cada elemento del arreglo.
 * 2. Escriba una función que reciba dos objetos y diga si todos sus atributos y valores son iguales o no.
 * 
 * {
    Luis : 'nombre',
    Cascante: 'apellido'
  },
  {
    Luis : 'nombre',
    Cascante: 'apellido',
    color: 'rojo'
  }
 * 3. Escriba una función que reciba n números, sume todos y devuelva el resultado de la suma.
  function(...parametros) => function(1,2,3,4) === function([1, 2, 3 ,4])
 * 4. Escriba una función que reciba dos arreglos y elimine del primero los elementos que aparecen en el segundo.

  [1,3,4,5,6,7], [3, 7] => [1, 4, 5, 6]
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

function iniciales(string) {
  const arreglo = string.split(" ");

  // arreglo[0].charAt(0) + "." + arreglo[1].charAt(0)
  return `${arreglo[0].charAt(0)}.${arreglo[1].charAt(0)}`;
}

const inicial = iniciales("Luis Cascante");
console.log(inicial);

function mayuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const mayus = mayuscula("luis");
console.log(mayus);

// Borrar atributo
function borrarAtributo(obj, llave) {
  delete obj[llave];
}

// Agregar atributo a objeto  'edad'  24
function agregarAtributo(obj, llave, valor) {
  // obj['edad'] = 24; === obj.edad = 24;
  // obj.llave = 24
  obj[llave] = valor;
  //obj.edad
  //obj.llave
}

const ejemplo = {
  nombre: "Luis",
  apellido: "Cascante",
};

// agregarAtributo(ejemplo, "edad", 24);
// console.log(ejemplo);

function addAtributte(persona, llave, valor) {
  persona = {
    nombre: "Luis",
    apellido: "Cascante",
    [llave]: llave,
  };
  return persona;
}

const patito = addAtributte(ejemplo, "edad", 24);
console.log(patito);

// Ordeno con ordenamiento de burbuja

// ******** VOLVER AQUÍ
function ordenarObjetos() {
  let auxiliar = 0;

  const arreglo = [
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 4,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 2,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 3,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 6,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 7,
    },
  ];

  /**
   * [8, 3, 1, 5, 6, 7]
   */
  for (i = 1; i < numeros.length; i++) {
    for (j = 0; j < numeros.length - i; j++) {
      if (numeros[j].id < numeros[j + 1].id) {
        auxiliar = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = auxiliar;
      }
    }
  }
}

// '32165' =>  '56123'
function darVueltaNumero(stringDeNumero) {
  let string = "";
  for (let i = stringDeNumero.length - 1; i >= 0; i--) {
    string += stringDeNumero.charAt(i);
  }

  return string;
}

const numeroInverso = darVueltaNumero("32165");
console.log(numeroInverso);
