const inputnum1 = document .getElementById("num1");
const inputnum2 = document .getElementById("num2");
const inputoperacion = document .getElementById("oper");
const inputresultado = document.getElementById("resu");
const btncalcular= document .getElementById("btncalcular");

btncalcular.addEventListener("click", e => {
    e.preventDefault();
    
    let num1 = parseFloat(inputnum1.value);
    let num2 = parseFloat(inputnum2.value);
    let operacion = inputoperacion.value;
    let resultado;
    
     if (operacion === "+") {
        resultado = num1 + num2;
    } else if (operacion === "-") {
        resultado = num1 - num2;
    } else if (operacion === "*") {
        resultado = num1 * num2;
    } else if (operacion === "/") {
        resultado = num2 !== 0 ? num1 / num2 : "-ERROR- division con 0";
    } else {
        resultado = "operacion no valida";
    }

    inputresultado.value = resultado;
});