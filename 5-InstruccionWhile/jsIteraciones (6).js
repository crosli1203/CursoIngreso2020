function mostrar() {

	var contador = 0;
	var acumulador = 0;


	while (contador <5) {
		acumulador += parseInt(prompt("ingrese un numero"));
		contador++;
		/*contador=contador+1;es lo mismo que poner contador++*/

	}



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador /contador;

}//FIN DE LA FUNCIÓN