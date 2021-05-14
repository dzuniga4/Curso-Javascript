// Ejemplo Closure, funciones se pueden comportar como objetos
function Persona() {
  this.nombre = "Luis";
  this.soyHumano = false;

  this.presentar = function () {
    console.log(`Hola ${this.nombre}, soy humano? ${this.soyHumano}`);
  };

  this.cambiarNombre = function (nuevoNombre) {
    this.nombre = nuevoNombre;
  };

  this.getNombre = function () {
    return this.nombre;
  };

  return {
    presentar: presentar,
    cambiarNombre, // Como la llave y la función se llama igual, basta con una vez
    getNombre: this.getNombre,
  };
}

const personaClosure = Persona();
console.log(personaClosure.getNombre());
personaClosure.cambiarNombre("Jimmy");
personaClosure.presentar();
console.log(personaClosure.getNombre());
