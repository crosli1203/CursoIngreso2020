function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert("si tiene 28 dias");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("si tiene 30 dias")
            break;
        default:
            alert("si tiene 31 dias");
            break;






    }





}//FIN DE LA FUNCIÓN