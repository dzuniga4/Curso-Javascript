
/**
 * Práctica de Arreglos
 *
 * 1. Escriba una función que reciba un contador, y un valor y cree un arreglo con la cantidad de valores que dice el contador. 
 * llenar(3, 'b') => ['b', 'b', 'b']
*/
// function Practica1(contador,c){
//    const arreglo = []
//   for(i=0;i<=contador;i++){
//     arreglo.push(c);
//   }

// }
// const resultado1 = Practica1(3,'b');
//     console.log(resultado);


/* 2.Escriba una función que le dé vuelta a un arreglo. [1, 2, 3] => [3, 2, 1]
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
  *5. Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos duplicados, PERO no pueden usar el new Set() de JS. 
  [1, 2, 3, 1, 2] => [1, 2, 3]
  */
  function Practica5(arreglo1){
    let i = 0;
    while (i < arreglo1.length) {
      let j = i + 1;
      while (j < arreglo1.length) {
        if (arreglo1[i] == arreglo1[j])
        arreglo1.splice(j,1);
        else
          j++;
      }
      i++;
    }
    return arreglo1;
  }
  console.log(Practica5([1, 2, 3, 1, 2]));
 
 /*
  *6. Escriba una función que reciba dos arreglos y devuelva la intersección. devolver los elementos que están en los dos arreglos.
  [1, 2, 3,4 ], [3,4,5, 6] => [3,4] 
  */
  function Practica6(arreglo1,arreglo2){
     
    const objetoFinal = arreglo1.filter(function(n){
      return arreglo2.indexOf(n)!==-1;
    });
    return objetoFinal;
  }
  console.log(Practica6([1, 2, 3,4 ], [3,4,5, 6]));
 

 /*
  7. Escriba una función que reciba un variable y diga si es un arreglo.
  */
  function Practica7(variable){
     
    return Array.isArray(variable);
  } 
  console.log(Practica7('er'));

  /*
  8. Escriba una función que reciba un arreglo y lo clone, es decir, devuelva un arreglo igual.
 */
  function Practica8(arreglo){     
    return [...arreglo];
  } 
  console.log(Practica8([1, 2, 3,4 ]));
  
  /*
  9. Escriba una función que reciba un arreglo de strings y devuelva todos los strings concatenados.*/
  function Practica9(arreglo){    
        
    return arreglo.join('');
  } 
  console.log(Practica9(['D','i','a','n','a']));
  /*10. Escriba una función que reciba un número e inserte un '-' menos entre los números pares y un '*' 
  asterico entre dos números impares. '134245780' => '1*34-2-45*78-0'.*/

  function Practica10(variable){
     
    let resultado="";
    let arreglo = variable.split("");


  for (let i = 0; i < arreglo.length; i++) {
    if (
      parseInt(arreglo[i]) % 2 === 0 &&
      parseInt(arreglo[i + 1]) % 2 === 0
    ) {
      resultado = resultado + arreglo[i] + "-";
    } else if (
      parseInt(arreglo[i]) % 2 !== 0 &&
      parseInt(arreglo[i + 1]) % 2 !== 0
    ) {
      resultado = resultado + arreglo[i] + "*";
    } else {
      resultado = resultado + arreglo[i];
    }
  }
    
    return resultado;
  } 
  console.log(Practica10('134245780'));


  /*11. Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de posición al azar. Pueden usar Math.random()*/
  function Practica11(arreglo){    
    var currentIndex = arreglo.length,  randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arreglo[currentIndex], arreglo[randomIndex]] = 
    [arreglo[randomIndex], arreglo[currentIndex]];
  }

  return arreglo;
  } 
  var arr = [2, 11, 37, 42];
  Practica11(arr);
  console.log(arr);
 
  /*12. Escriba una función que encuentre los valores repetidos de un arreglo.*/

  function Practica12(arreglo){     
    var repetidos = [];
      var temporal = [];

      arreglo.forEach((value,index)=>{
      temporal = Object.assign([],arreglo); 
      temporal.splice(index,1);     
      if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1){
       repetidos.push(value); 
      }
    });

      return repetidos;
  } 
  console.log(Practica12([1, 2,3,4,3,1]));

  /*13. Escriba una función que encuentre la diferencia de dos arreglos, es decir, 
  devolver los valores que solo están en uno y no en el otro.[1, 2, 3,4 ], [3,4,5, 6] => [1,2, 5, 6]
   */
  function Practica13(arreglo1,arreglo2){     
    var resultado = [];
     
     for (let i = 0; i < arreglo1.length; i++) {      
      if(arreglo2.indexOf(arreglo1[i])==-1){
       resultado.push(arreglo1[i]); 
      }
    }
    for (let i = 0; i < arreglo2.length; i++) {      
      if(arreglo1.indexOf(arreglo2[i])==-1){
       resultado.push(arreglo2[i]); 
      }
    }

      return resultado;
  } 
  console.log(Practica13([1, 2, 3,4 ], [3,4,5,6,8]));
