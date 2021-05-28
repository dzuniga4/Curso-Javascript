// Programar métodos de arreglos

const arregloEjemplo = [1, 2, 3, 4, 5, 6];

// 1. Array.find
function find(arreglo, func) {
  for (elemento in arreglo) {
    const numero = parseInt(arreglo[elemento]);
    const resultado = func(numero);
    if (resultado === true) {
      return elemento;
    }
  }
}

const elem = find(arregloEjemplo, function (elemento) {
  if (elemento === 2) {
    return true;
  }
  return false;
});

const elemFind = arregloEjemplo.find(function (elemento) {
  if (elemento === 2) {
    return true;
  }
  return false;
});

// console.log(elemFind);

// 2. Map/forEach

function map(arreglo, func) {
  const resultado = [];
  for (indice in arreglo) {
    const elemento = arreglo[indice];
    const resultadoFuncion = func(elemento);
    resultado.push(resultadoFuncion);
  }

  return resultado;
}

function forEach(arreglo, func) {
  for (indice in arreglo) {
    const elemento = arreglo[indice];
    func(elemento);
  }
}

const estudiantes = ["Guiselle", "Mariana", "Whanderley", "Rodrigo"];

// FOR IN VS FOR OFF

// for (estudiante in estudiantes) {
//   console.log("In ", estudiante);
// }

// for (estudiante of estudiantes) {
//   console.log("Of ", estudiante);
// }

// General 1
function imprimirEstudiantes(estudiante) {
  console.log(estudiante);
}

function agregarIndice(string, indice) {
  console.log(string + " " + indice);
}

function ejecutarSobreElementos(arreglo, funcion) {
  let indice = 0;
  for (elemento of arreglo) {
    funcion(elemento, indice);
    indice++;
  }
}

// ejecutarSobreElementos(estudiantes, imprimirEstudiantes);
// ejecutarSobreElementos(estudiantes, agregarIndice);

// General 2
const obj1 = {
  nombre: "Luis",
  apellido: "Cascante",
  edad: 27,
  genero: "Masculino",
};

const obj2 = {
  nombre: "Luis",
  apellido: "Cascante",
  edad: 27,
  genero: "Masculino",
};

function compararObjetos(obj1, obj2) {
  const llavesObj1 = Object.keys(obj1);
  const llavesObj2 = Object.keys(obj2);

  if (llavesObj1.length !== llavesObj2.length) {
    return false;
  }

  for (llave of llavesObj1) {
    if (obj1[llave] !== obj2[llave]) {
      return false;
    }
  }

  return true;
}

// console.log(compararObjetos(obj1, obj2));

// General 3
function sumar(...numeros) {
  let resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] === "number") {
      resultado += numeros[i];
    }
  }

  return resultado;
}

console.log(sumar(1, 2, 3, undefined, 5, 6, 7, 8, 9));

// General 4
function eliminarRepetidos(arreglo1, arreglo2) {
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arreglo1.splice(i, 1);
        i--;
        break;
      }
    }
  }
}

const arregloNum1 = [1, 3, 4, 3, 5, 6, 7];
const arregloNum2 = [3, 7, 3, 4, 5];

eliminarRepetidos(arregloNum1, arregloNum2);

console.log(arregloNum1);

// General 5
const personas = [
  { nombre: "Luis", apellido: "Cascante", edad: 27, genero: "Masculino" },
  { apodo: "Luis", apellido: "Elizondo", edad: 28, genero: "Masculino" },
  { nombre: "Edris", apellido: "Ríos", edad: 22, genero: "Masculino" },
  { nombre: "Mariana", apellido: "García", edad: 19, genero: "Femenino" },
  { nombre: "Betzabet", apellido: "Cháves", edad: 23, genero: "Femenino" },
  { nombre: "Hati", apellido: "Alexandra", edad: 2, genero: "Femenino" },
  { nombre: "Akamaru", apellido: "Josue", edad: 3, genero: "Masculino" },
  { nombre: "Siena", apellido: "María", edad: 1, genero: "Femenino" },
];

function esMayorEdad(persona) {
  if (persona.edad >= 18) {
    return true;
  }

  return false;
}

function esFemenino(persona) {
  return persona.genero === "Femenino";
}

function clasificarArreglo(arreglo, funcion) {
  const pasaron = [];
  const noPasaron = [];

  for (elemento of arreglo) {
    const resultado = funcion(elemento);
    if (resultado === true) {
      pasaron.push(elemento);
    } else {
      noPasaron.push(elemento);
    }
  }

  console.log("Pasaron", pasaron);
  console.log("No Pasaron", noPasaron);
}

// clasificarArreglo(personas, esMayorEdad);
// clasificarArreglo(personas, esFemenino);

const incrementados = map(arregloEjemplo, function (elemento) {
  return elemento + 1;
});

const personasFormateadas = map(personas, function (persona) {
  return {
    nombreCompleto: `${persona.nombre} ${persona.apellido}`,
    añoNacimiento: 2021 - persona.edad,
  };
});

// console.log(personasFormateadas);

// forEach(personas, function (persona) {
//   console.log(persona);
// });

// 3. Filter
function filter(arreglo, func) {
  const resultado = [];
  for (elemento of arreglo) {
    const resultadoFuncion = func(elemento);
    if (resultadoFuncion === true) {
      resultado.push(elemento);
    }
  }

  return resultado;
}

const arregloFiltrado = filter(personas, function (persona) {
  if (persona.edad < 27) {
    return true;
  }
  return false;
});

// console.log(arregloFiltrado);

const suma = arregloEjemplo.reduce(function (
  total,
  elementoActual,
  indiceActual,
  arreglo
) {
  return total + elementoActual;
},
0);
