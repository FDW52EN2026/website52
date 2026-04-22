/* Crear las referencias hacia los objetos
que se van a programar */

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputOperacion = document.getElementById("Operacion");
const inputResultado = document.getElementById("Resultado");
const botonCalcular = document.getElementById("botonCalcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    let Operacion = inputOperacion.value;

    if(Operacion == "+"){
        Resultado = num1 + num2;
    }
    else if(Operacion == "-"){
        Resultado = num1 - num2;
    }
    else if(Operacion == "*"){
        Resultado = num1 * num2;
    }
    else if(Operacion == "/"){
        Resultado = num1 / num2;
    }
    
    inputResultado.value = Resultado;
});
