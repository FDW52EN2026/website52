const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputOp = document.getElementById("operation");
const inputRes = document.getElementById("answ");
const btn = document.getElementById("btnSumar");

btn.addEventListener("click", function(e) {
    e.preventDefault(); // evita que se recargue la página

    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const op = inputOp.value;

    let resultado;

    if (op === "+") {
        resultado = num1 + num2;
    } else if (op === "-") {
        resultado = num1 - num2;
    } else if (op === "*") {
        resultado = num1 * num2;
    } else if (op === "/") {
        resultado = num1 / num2;
    } else {
        resultado = "Operacion no valida";
    }

    inputRes.value = resultado;
});