function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {

        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio");
            break;

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "mayo":
        case "Junio":
            alert("Falta para el invierno");
            break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor");
            break;



    }




}//FIN DE LA FUNCIÓN