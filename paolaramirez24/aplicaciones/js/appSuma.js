/*Crea las referencias hacia los objetos que van a programar
const inputnum1 = document.getElementById("num1");
const inputnum2 = document.getElementById("num2");
const inputSuma = document.getElementById("suma");
const botonSuma = document.getElementById("botonSumar");
botonSuma.addEventListener("click", (e) => {
  e.preventDefault();
  let num1 = parseInt(inputnum1.value);
  let num2 = parseInt(inputnum2.value);
  let suma;
  suma = num1 + num2;
  inputSuma.value = suma;
  });
  comentario
  */
const inputnum1 = document.getElementById("num1");
const inputnum2 = document.getElementById("num2");
const inputOperacion = document.getElementById("operacion");
const inputResultado = document.getElementById("resultado");
const botonOperacion = document.getElementById("botonOperacion");

botonOperacion.addEventListener("click", (e) => {
  e.preventDefault();
  let num1 = parseInt(inputnum1.value);
  let num2 = parseInt(inputnum2.value);
  let operacion = inputOperacion.value;

  let resultado;

  if (operacion == "+") resultado = num1 + num2;
  else if (operacion == "-") resultado = num1 - num2;
  else if (operacion == "*") resultado = num1 * num2;
  else if (operacion == "/") resultado = num1 / num2;

  inputResultado.value = resultado;
});
