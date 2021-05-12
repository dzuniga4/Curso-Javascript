// Ejemplos

console.log(a);
console.log(b);

var a = "Hello World!";

function b() {
  console.log("Hola");
}

b(); // Llamado a función

// Etapas de Traducción de JS
// 1. Etapa de Creación - Hoisting
/*
  En esta etapa se guarda el espacio en memoria para las variables, funciones ,etc. del código
  1. En el caso de las funciones se guarda la función, el nombre y el código.
  2. En el caso de las variables se guarda un undefined como placeholder.
*/

// 2. Etapa de Ejecución
/*
  Se ejecuta el código :), aquí ya se asignan los valores a las variables y se hacen los
  llamados a las funciones.
*/
