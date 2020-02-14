function mostrar() {
    var numuno;
    var numdos;
    var suma;
    var resta;
    numuno = prompt("Ingrese el primer Numero: ");
    numdos = prompt("Ingrese el segundo Numero: ");
    if (numuno == numdos) {
        alert("son iguales" + " numero: " + numuno + " numero: " + numdos);

    }
    else {
        if (numuno > numdos) {
            resta = parseInt(numuno) - parseInt(numdos)
            alert("El primer numero es mayor y la resta es: " + resta);
        }
        else {
            suma = parseInt(numunos) + parseInt(numdos);
            alert("El primer numero es menor y la suma es: " + suma);
            if (suma < 10) {
                alert("La suma es" + suma + "y supero el 10");
            }
        }

    }

}
