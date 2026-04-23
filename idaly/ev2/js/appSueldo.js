const inputHoras = document.getElementById("horas");
const inputPago = document.getElementById("pago");
const inputTurno = document.getElementById("turno");
const outputSueldo = document.getElementById("sueldo");
const botonCalcular = document.getElementById("botonCalcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let horas = parseInt(inputHoras.value);
    let pago = parseFloat(inputPago.value);
    let turno = parseInt(inputTurno.value);
    let sueldo;

    switch(turno){
        case  1:
            sueldo = horas * pago * 1.02;
            sueldo 
            break;
        case 2:
            sueldo = horas * pago * 1.08;
            break;
        case 3:
            sueldo = horas * pago * 1.15;
            break;
    }
    /* mostrar el resultado */
    outputSueldo.value = sueldo;
});