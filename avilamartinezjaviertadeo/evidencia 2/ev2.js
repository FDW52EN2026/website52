/* Crear referencias hacia los objetos que se van a programar*/

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputSuma = document.getElementById("operacion");
const inputResultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("botonSumar");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();
    
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let operacion = inputoperacion.value ;
    
    if(operacion == "+"){
    result = num1 + num2;
    }

     else if(operacion == "-"){
        result = num1 - num2;
        }

        else if(operacion == "*"){
            result = num1 * num2;
            }

           else if(operacion == "/"){
                result = num1 / num2;
                }

                inputResultado.value = result;


    inputSuma.value = suma;
});