function mostrar() {
    var planeta = prompt("ingrese un planeta");
    var mensaje = "";
    switch (planeta) {

        case "tierra":

            mensaje = "aca vivimos"

            break;
        case "mercurio":
        case "venus":
            mensaje = "aca hace mas calor"
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "aca hace mas frio"
            break;
        default:
            mensaje = "no es un planeta valido"
            alert(mensaje);
            break;
    }
}
