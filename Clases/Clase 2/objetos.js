// Objetos

// Crear objetos con literales de objetos
const persona = {
  soyHumano: true,
  presentar: function () {
    console.log(`Hola ${this.nombre}, soy humano? ${this.soyHumano}`);
  },
};

// Crear con object.create y un objeto base o null
const obj = Object.create(persona);
console.log(obj);

// Asignar una nueva propiedad o atributo a un objeto
obj.nombre = "Luis";
console.log(obj);

// Ejemplificar atributos no inicializados por .create()
obj.soyHumano = obj.soyHumano;
obj.presentar = obj.presentar;
console.log(obj);

// Accesar a una propiedad en notación dinámica
console.log(obj["nombre"]); // Es lo mismo que hcer obj.nombre

// Métodos comunes de los objetos
// Object.keys
const llaves = Object.keys(obj);
console.log("Keys", llaves);

// Object.entries

console.log("Entires", Object.entries(obj));

// Object.hasOwnProperty
console.log("Tiene propiedad", obj.hasOwnProperty("soyHumano"));

/* 
  Práctica de objetos
  1. Vamos a crear objetos que tengan el nombre, origen y autor de 1 pinguinos.
  2. Escriba una funcion que reciba un pinguino, y imprima en pantalla:
  'Hola, soy un pinguino y me llamo <nombre>
  3. A algún pinguino, vamos a crearle una nueva propiedad con nombre
  "puedeVolar" y le vamos a poner false
*/

// 1
const pinguino1 = {
  nombre: "Misha",
  origen: "Death and the Penguin, Penguin Lost",
  autor: "Andrey Kurkov",
};

// 2
function presentarse(pinguino) {
  // inserte código aquí
}
