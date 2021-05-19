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
  2. Escriba una método dentro del objeto , y imprima en pantalla:
  'Hola, soy un pinguino y me llamo <nombre>'
  3. A  pinguino, vamos a crearle una nueva propiedad con nombre
  "puedeVolar" y le vamos a poner false, dentro del objeto.
  4. Vamos a cambiarle el nombre al pinguino a 'Happy Feet'
  5. Vamos a cambiarle el "puedeVolar" por "true"
  6. Vamos a crear un método dentro del objeto que se llame "volar", si la propiedad "puedeVolar"
  es true, imprime "Puedo volar!", si es false imprime "No puedo volar :("
  7. Llamar el método volar del pinguino.
  8. Con un ciclo, imprima todas las llaves del objeto pinguino
  9. Con un ciclo, imprima todos los valores del objeto pinguino
  */

// 1
console.log(
  "-----------------------------Ejercicio 1--------------------------"
);
const pinguino = {
  nombre: "Misha",
  origen: "Death and the Penguin, Penguin Lost",
  autor: "Andrey Kurkov",
};
console.log(pinguino);

// 2
console.log(
  "-----------------------------Ejercicio 2--------------------------"
);
pinguino.hola = function () {
  console.log(`Hola, soy un pinguino y me llamo ${this.nombre}`);
};

pinguino.hola();

//3
console.log(
  "-----------------------------Ejercicio 3--------------------------"
);
pinguino.puedeVolar = false;
console.log(pinguino.puedeVolar);

//4
console.log(
  "-----------------------------Ejercicio 4--------------------------"
);
pinguino.nombre = "Happy Feet";
console.log(pinguino.nombre);

//5
console.log(
  "-----------------------------Ejercicio 5--------------------------"
);
pinguino.puedeVolar = true;
console.log(pinguino.puedeVolar);

//6
console.log(
  "-----------------------------Ejercicio 6--------------------------"
);
pinguino.volar = function () {
  if (this.puedeVolar) {
    console.log("Puedo volar!");
  } else {
    console.log("No puedo volar :(");
  }
};

//7
console.log(
  "-----------------------------Ejercicio 7--------------------------"
);
pinguino.volar();

// 8
console.log(
  "-----------------------------Ejercicio 8--------------------------"
);
for (llave in pinguino) {
  console.log(llave);
}

//9
console.log(
  "-----------------------------Ejercicio 9--------------------------"
);
for (llave in pinguino) {
  console.log(pinguino[llave]);
}

// Extra
console.log("-----------------------------EXTRA--------------------------");
for (llave in pinguino) {
  console.log(llave, pinguino[llave]);
}
