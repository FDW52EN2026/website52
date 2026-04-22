//Crear las referencias hacia los objetos que se van a programar.
//Es para atraer el elemento del documento mediante el id 
const inputNum1 = document.getElementById("num1")
const inputNum2 = document.getElementById("num2")
const inputOperacion = document.getElementById("operacion")
const inputResult = document.getElementById("result")
const botonSumar = document.getElementById("botonSuma")

//el boto siempre se programa primero para que reaccione al clic
botonSumar.addEventListener("click", e => {
    //esto es para que no borre los numero de las cajas
    e.preventDefault();
    //elparseint es para que no lo haga cadena y lo haga numero
    let num1 = parseInt(inputNum1.value); 
    let num2 = parseInt(inputNum2.value); 
    let operacion = inputOperacion.value; 
    
    if(operacion == "+")
        result = num1 + num2; 
    else if(operacion == "-")
        result = num1 - num2; 
    else if (operacion == "/")
        result = num1 / num2;
    else if(operacion == "*")
        result = num1 * num2;  


    //este es el print de la consola 
    inputResult.value = result; 

}); 