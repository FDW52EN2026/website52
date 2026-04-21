const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputOperacion = document.getElementById("operacion");
const inputResultado = document.getElementById("resultado")
const botonResultado = document.getElementById("botonResultado");

botonResultado.addEventListener("click", e => {
    e.preventDefault();
    
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value); /* Agregar valores a las variables */
    let operacion = inputOperacion.value;
    if(operacion == "+")
        res = num1 + num2
    else if(operacion == "-")
        res = num1 - num2
    else if(operacion == "*")
        res = num1 * num2
    else if(operacion == "/")
        res = num1 / num2
    inputResultado.value = res; 
});