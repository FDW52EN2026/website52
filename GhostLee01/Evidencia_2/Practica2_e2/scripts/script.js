/*Crear las referencias a los objetos que se van a progrmar*/

const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputSuma = document.getElementById("answ");
const inputOperacion = document.getElementById("operation")
const btnSuma = document.getElementById("btnSumar");

btnSuma.addEventListener("click", e => {
    e.preventDefault();
    console.log("hola");
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let operacion = inputOperacion.value;
    let res;
    

    switch (operacion) {
        case "+":
            res = num1 + num2;
            break;

        case "-":
            res = num1 - num2;   
            break;
        
            case "*":
            res = num1 * num2;
            break;

        case "/":
            res = num1/num2;
        break;

        default: res = 0;
    break;
}

    inputSuma.value = res;
    
});




