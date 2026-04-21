const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputOperacion = document.getElementById("operacion");
const inputResultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("botonCalcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let operacion = inputOperacion.value;
    let resultado;

    if (operacion == "+"){
        resultado = num1 + num2;
    }
    else if (operacion == "-"){
        resultado = num1 - num2;
    }
    else if (operacion == "*"){
        resultado = num1 * num2;
    }
    else if (operacion == "/"){
        resultado = num1 / num2;
    }

    inputResultado.value = resultado;
});