function mostrar() {
    //tomo la edad  

    var edad;
    var ecivil;
    edad = document.getElementById("edad").value;
    ecivil = document.getElementById("estadoCivil").value;

    if (edad < 18 && ecivil != "Soltero") {

    }
    else if (edad >= 18 && ecivil == "Soltero") {
        alert(" Es SOLTERO y no es menor");
    }


}//FIN DE LA FUNCIÓN