function mostrar() {

	var contador = 0;
	var multi = 1;
	var numero;
	var respuesta = true;


	do {
		numero = parseInt(prompt("Ingrese un numero :"));

		if (numero > 0) {
			contador += numero;
		}
		else if (numero < 0) {
			multi = multi * numero;
		}
		respuesta = confirm("desea seguir ingresando numeros?");
	}



	while (respuesta == true);






	document.getElementById('suma').value = contador;
	document.getElementById('producto').value = multi;
}
//FIN DE LA FUNCIÓN