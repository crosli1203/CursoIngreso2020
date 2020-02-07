function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota = Math.floor(Math.random() * 10) + 1;
	{
		if (nota == 9 || nota == 10) {
			alert(nota + " EXELENTE ");
		}
		else
			if (nota >= 4) {
				alert(nota + " APROBO ");
			}
			else {
				if (nota < 4) {
					alert(nota + " Vamos, que la proxima se puede ");
				}
			}








	}




}//FIN DE LA FUNCIÓN