const inputnum1 = document.getElementById("num1");
const inputnum2 = document.getElementById("num2");
const inputoperacion = document.getElementById("operacion");
const outputresultado = document.getElementById("resultado");
const botoncalcular = document.getElementById("boton");

botoncalcular.addEventListener("click", e =>{

    e.preventDefault();

    let num1 = parseInt(inputnum1.value);
    let num2 = parseInt(inputnum2.value);
    let operacion = inputoperacion.value;
    let resultado =parseFloat(outputresultado.value);


    switch (operacion){
        case "+":
            resultado = num1 + num2;
            break
        case "-":
            resultado = num1 - num2;
            break
        case "*":
            resultado = num1 * num2;
            break
        case "/":
            resultado =num1/num2;
            break


    }

    outputresultado.value = resultado;
});