/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    var numuno;
    numuno = document.getElementById("importe").value;

    document.getElementById("resultado").value = (parseInt(numuno) - parseInt(numuno) * 25 / 100)

}
