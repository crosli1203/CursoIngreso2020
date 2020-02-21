function mostrar() {

	var maxx = 0;
	var minn =99999999999;
	var numero;

	var respuesta = true;

	do {

		numero = parseInt(prompt("Ingrese un numero"));

		if (numero > maxx) {
			maxx = numero;
		}
		if (numero < minn) {
			minn = numero;
		}


		respuesta = confirm("Desea seguir ingresando numeros?");

	}
	while (respuesta == true)

	document.getElementById("maximo").value = maxx;
	document.getElementById("minimo").value = minn;


}//FIN DE LA FUNCIÓN