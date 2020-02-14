function mostrar() {
    //tomo la edad  
    var mesDelAnio = document.getElementById('mes').value;

    switch (mesDelAnio) {

        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio");
            break;

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno");
            break;

        default:
            alert("Ya pasamos el frio, ahora calor");
            break;



    }




}//FIN DE LA FUNCIÓN