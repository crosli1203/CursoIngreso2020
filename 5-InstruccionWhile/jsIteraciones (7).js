function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta =true;

	while (respuesta == true) {


		acumulador += parseInt(prompt("Ingrese un numero"));
		contador++;
		respuesta = confirm("Desea Ingresar mas numeros?")

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN