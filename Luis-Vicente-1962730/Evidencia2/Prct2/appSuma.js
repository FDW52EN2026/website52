const inputNum1=document.getElementById("num1");
const inputNum2=document.getElementById("num2");
const inputOperacion=document.getElementById("operacion");
const mensaje = document.getElementById("mensaje");
const botonCalcular = document.getElementById("calcular");
const inputResultado=document.getElementById("resultado");

botonCalcular.addEventListener("click", e=>{
    e.preventDefault();
    mensaje.innerHTML="";

    let operacion = inputOperacion.value;
    let resultado;
    let N1 = parseFloat(inputNum1.value);
    let N2 = parseFloat(inputNum2.value);

    switch(operacion){
        case "+":
            resultado=N1+N2;
            break;
        case "-":
            resultado=N1-N2;
            break;
        case "*":
            resultado=N1*N2;
            break;
        case "/":
            resultado=N1/N2;
            break;
        default:
            mensaje.innerHTML=`<strong>La operación no es válida</strong>`;
    }

    inputResultado.value=resultado;
})
