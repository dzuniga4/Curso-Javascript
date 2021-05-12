/*
  1. Cadena de caracteres.
  2. Numbers
  3. Booleans
  4. Undefined / null
*/

// Ejemplos de Cadenas
let str = "a ";
let str1 = "Hola esto es un ejemplo de una cadena";
let strTemplate = `Hola esto es un ejemplo de una cadena`; // String template, coming soon...

// Métodos de cadenas

//              "a "
let charAt = str.concat(" ", str1, " ", strTemplate);
let concatSuma = str + " " + str1 + " " + strTemplate;
// str += str1;

let strTemplate2 = `${str} holi ${str1} adios ${strTemplate}`; // DING DING GANADOR

str;
charAt;
concatSuma;
strTemplate2;

// Ejemplos de números

let num = 5;
let num1 = 10;
let numNegativo = -500;
let numPositivo = 7680;

let suma = num + num1;
let resta = num - num1;
let division = num / num1;
let multi = num * num1;
let resiMod = num % num1;
let exponente = num ** num1;
// summa++; Incrementa 1
//resta--; Resta 1
suma;
resta;
division;
multi;
resiMod;
exponente;
const fixed = division.toFixed(0);
fixed;

// Boolean

let verdadero = true;
let falso = false;

// Operaciones booleanas

const conjuncion = verdadero && falso;
conjuncion;

const disyuncion = verdadero || falso;
disyuncion;

const negacion = !verdadero;
negacion;

let var0; //undefined
let var1 = null;

// Coercion

const resultado = "1" + 1;
resultado;

const tipo = typeof resultado;
tipo;
