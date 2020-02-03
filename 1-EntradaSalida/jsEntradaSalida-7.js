/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var uno;
    var dos;

    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    alert(" la suma es " + (parseInt(uno) + parseInt(dos)));


}

function restar() {
    var uno;
    var dos;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    alert(" la resta es " + (parseInt(uno) - parseInt(dos)));


}

function multiplicar() {
    var uno;
    var dos;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    alert(" la multiplicacion es " + (parseInt(uno) * parseInt(dos)));

}

function dividir() {
    var uno;
    var dos;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;

    alert(" la division es " + (parseInt(uno) / parseInt(dos)));


}

