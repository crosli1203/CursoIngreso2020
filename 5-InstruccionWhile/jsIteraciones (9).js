function mostrar() {

	var maxx = 0;
	var minn = 99999999;
	var numero;

	var respuesta = true;

	while (respuesta == true) {

		numero = parseInt(prompt("Ingrese un numero"));

		if (numero > maxx) {
			maxx = numero;
		}
		if (numero < minn) {
			minn = numero;
		}


		respuesta = confirm("Desea seguir ingresando numeros?");

	}

	document.getElementById("maximo").value = maxx;
	document.getElementById("minimo").value = minn;


}//FIN DE LA FUNCIÓN