function mostrar() {

	var contador = 0;
	var numero;
	var contadornega = 0;
	var acumuladornega = 0;
	var contadorposi = 0;
	var acumuladorposi = 0;
	var contadorceros = 0;
	var contadorpares = 0;
	var promedioposi;
	var promedionega;
	var diferencia = 0;
	var respuesta = true;

	while (respuesta == true) {
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero < 0) {
			contadornega++;
			acumuladornega += numero;
		}
		else {
			if (numero > 0) {
				contadorposi++;
				acumuladorposi += numero;

			}
			else {
				contadorceros += 1;
			}

		}
		if (numero % 2 == 0) {
			contadorpares++;

		}

		respuesta = confirm("Desea seguir ingresabdo numeros?");
	}

	promedioposi = acumuladorposi / contadorposi;
	promedionega = acumuladornega / contadornega;
	diferencia = contadorposi - contadornega;

	document.write("suma de Negativos: " + acumuladornega + "<br>");
	document.write("suma de Positivos: " + acumuladorposi + "<br>");
	document.write("cantidad de Negativos: " + contadornega + "<br>");
	document.write("cantidad de positivos: " + contadorposi + "<br>");
	document.write("cantidad de ceros: " + contadorceros + "<br>");
	document.write("cantidad de pares: " + contadorpares + "<br>");
	document.write("promedio de positivos: " + promedioposi + "<br>");
	document.write("promedio de negativos: " + promedionega + "<br>");
	document.write("diferencia: " + diferencia + "<br>");



}//FIN DE LA FUNCIÓN