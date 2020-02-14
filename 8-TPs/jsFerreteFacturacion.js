/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar() {
    var preciouno;
    var preciodos;
    var preciotres;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value
    alert("La suma es : " + (parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres)));

}
function Promedio() {
    var preciouno;
    var preciodos;
    var preciotres;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value
    alert("El promedio de los productos es:" + ((parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres))/3));
}
function PrecioFinal() {
    var preciouno;
    var preciodos;
    var preciotres;
    var sum;
    var iva;
    var t;
    preciouno = document.getElementById("PrecioUno").value;
    preciodos = document.getElementById("PrecioDos").value;
    preciotres = document.getElementById("PrecioTres").value
    sum=parseInt(preciouno) + parseInt(preciodos) + parseInt(preciotres);
    iva=(sum*21/100);
    t=(sum+ iva);
    

    alert("el precio final es: " +t);
}