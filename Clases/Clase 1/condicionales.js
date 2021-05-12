// If

const var1 = true;
const var2 = false;

if (var2) {
  console.log("If");
} else if (var1 && var2) {
  console.log("Else if");
} else {
  console.log("Else");
}

// Operador ternario
//     Pregunta: true o false? \   Si true                    Si False
const resultado = var1 || var2 ? "<div>Ya cargó </div>" : "<div>Cargando</div>";
console.log(resultado);

function hacerFinally() {
  console.log("Finally");
}

// Switch
function ejemploSwitch(valor) {
  switch (valor) {
    case 0:
      hacerFinally();
      return "Estoy en caso 0";

    case 1:
      return "Estoy en caso 1";

    case 2:
      return "Estoy en caso 2";

    default:
      hacerFinally();
      return "Estoy en default";
  }
}

const resultadoSwitch = ejemploSwitch(100000000000000);
console.log(resultadoSwitch);
