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

const incrementados = map(arregloEjemplo, function (elemento) {
  return elemento + 1;
});

// console.log(incrementados);

const personas = [
  { nombre: "Luis", apellido: "Cascante", edad: 27 },
  { nombre: "Jeremy", apellido: "Elizondo", edad: 28 },
  { nombre: "Edris", apellido: "Ríos", edad: 22 },
  { nombre: "Mariana", apellido: "García", edad: 19 },
  { nombre: "Betzabet", apellido: "Cháves", edad: 23 },
];

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
  for (indice in arreglo) {
    const elemento = arreglo[indice];
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

const resultadoReduce = reduce(arregloEjemplo);

const suma = arregloEjemplo.reduce(function (
  total,
  elementoActual,
  indiceActual,
  arreglo
) {
  return total + elementoActual;
},
0);

console.log(suma);
