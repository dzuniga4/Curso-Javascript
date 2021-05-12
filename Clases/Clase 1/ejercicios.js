/*
  1. Escriba una función que reciba dos números y devuelva el mayor.
  2. Escriba una función que dados 3 números devuelva el signo de la multiplicación de los 3. (Positivo o negativo)
  3. Escriba una función que ordene 3 números de mayor a menor.
  4. Escriba una función que reciba un idioma ('es', 'en') y devuelva <hola mundo!> en el idioma correspondiente.
  5. Escriba una función que reciba un número y una palabra, y devuelva un string con la forma correcta, singular o plural. 1 perro 2 perros
*/

// 1
function mayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else if (numero2 > numero1) {
    return numero2;
  } else {
    console.log("Los números son iguales!");
  }
}

function signo(x, y, z) {
  const resultado = x * y * z;
  if (resultado >= 0) {
    console.log("El resultado es: ", resultado, "y es positivo");
  } else {
    console.log("El resultado es: ", resultado, "y es negativo");
  }
}

function ordenar(num1, num2, num3) {
  let resultado;
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      resultado = `Primer param primero${num1} segundo param segundo ${num2} tercer param ultimo ${num3}`;
    } else {
      resultado = `Primer param primero${num1} tercer param segundo ${num3} segundo param ultimo ${num2}`;
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      resultado = `Segundo param primero${num2} primer param segundo ${num1} tercer param ultimo ${num3}`;
    } else {
      resultado = `Segundo param primero${num2} tercer param segundo ${num3} primer param ultimo ${num1}`;
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num2 > num1) {
      resultado = `tercer param primero${num3} segundo param segundo ${num2} primer param ultimo ${num1}`;
    } else {
      resultado = `tercer param primero${num3} primer param segundo ${num1} segundo param ultimo ${num2}`;
    }
  }
  return resultado;
}

const resultado = ordenar(3, -2, 1);
console.log(resultado);

function holaMundoInternacional(idioma) {
  switch (idioma) {
    case "es":
      return "Hola Mundo!";

    case "en":
      return "Hello World!";

    default:
      break;
  }
}

console.log(holaMundoInternacional("en"));

function singularOPlural(numero, palabra) {
  return `${numero} ${palabra}${numero > 1 ? "s" : ""}`;
}

console.log(singularOPlural(2, "perro"));
