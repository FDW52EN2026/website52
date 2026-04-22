/*Crear las referencias hacia los objetos que se van a programar*/


const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputoperacion = document.getElementById("operacion");
const inputresultado = document.getElementById("resultado");
const botonsuma = document.getElementById("botonCalcular");

botonsuma.addEventListener("click", e => {
    e.preventDefault();

    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let operacion = inputoperacion.value;
    let resultado;
    
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;

    }

    inputresultado.value = resultado;
}); 


