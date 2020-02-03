/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numuno;

    numuno=document.getElementById("sueldo").value;

    document.getElementById("resultado").value=(parseInt(numuno) + parseInt(numuno)*10 / 100);

	
}
