/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var uno;
    var dos;
    var suma;

    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    suma = (parseInt(uno) + parseInt(dos));
    alert(suma);

}

