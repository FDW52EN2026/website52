/* Crear las referencias hacia los objetos que se van a programar */
// const inputNum1 = document.getElementById("num1");
// const inputNum2 = document.getElementById("num2");
// const inputSuma = document.getElementById("suma");
// const botonSuma = document.getElementById("botonSuma");

// botonSuma.addEventListener("click", (e) => {
//   e.preventDefault();
//   let num1 = parseInt(inputNum1.value);
//   let num2 = parseInt(inputNum1.value);
//   let suma;
//   suma = num1 + num2;
//   inputSuma.value = suma;
// });

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputOp = document.getElementById("operacion");
const inputResultado = document.getElementById("resultado");
const botonOperacion = document.getElementById("botonOperacion");

botonOperacion.addEventListener("click", (e) => {
  e.preventDefault();
  let num1 = parseInt(inputNum1.value);
  let num2 = parseInt(inputNum1.value);
  let op = inputOp.value;
  let resultado;

  switch (op) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    default:
      resultado = "Error";
      break;
  }

  inputResultado.value = resultado;
});
