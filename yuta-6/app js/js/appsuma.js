/*Crear las referencias hacia los objetos q se van a programar*/

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputRes = document.getElementById("res");
const inputOperacion = document.getElementById("Operacion")
const botoncalc = document.getElementById("btncalc");

botoncalc.addEventListener("click", e => {
    e.preventDefault();

    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let operacion = inputOperacion.value;
    let resultado;

    resultado = num1 + num2;

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

    inputRes.value = resultado;
});