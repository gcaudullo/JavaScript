class Alumno {
    constructor(nombreCompleto, nota) {
        this.nombreCompleto = nombreCompleto;
        this.nota = nota;
    }

    getNombreCompleto() {
        return this.nombreCompleto;
    }

    getNota() {
        return this.nota;
    }

    setNombreCompleto(nuevoNombre) {
        this.nombreCompleto = nuevoNombre;
    }

    setNota(nuevaNota) {
        this.nota = nuevaNota;
    }
}


function solicitoNombre() {
    let nombreCompleto = prompt("Ingrese Nombre y Apellido o de lo contrario ingrese Fin: ");
    return (nombreCompleto)
}

function solicitoNota() {
    let nota = parseInt(prompt("Ingrese Nota del alumno: "));
    return (nota)
}

function dividir(dividendo, divisor) {
    return dividendo / divisor;
}

alert("Este programa calcula el promedio de notas de una clase \nPara ello ingrese nombre completo y nota adquirida por cada alumno \nPara finalizar el listado escriba Fin");
const alumnos = [];
let nombreCompleto = solicitoNombre();
let i = 0;
let sumatoriaNotas = 0;
let nota = 0;
while (nombreCompleto != "Fin") {
    nota = solicitoNota()
    if (nota > 12 || nota < 1) {
        alert("nota fuera del rango permitido 1..12");
    }
    else {
        alumnos[i] = new Alumno(nombreCompleto, nota)
        sumatoriaNotas = sumatoriaNotas + nota;
        nombreCompleto = solicitoNombre();
        i += 1;
    }
}
alert("La clase cuenta con " + i + " alumnos");
alert("los alumnos ingresados y sus notas son: ")
for (let j = 0; j < alumnos.length; j++) {
    alert(alumnos[j].getNombreCompleto() + " " + alumnos[j].getNota())
}
alert("El promedio de notas de la clase es: " + dividir(sumatoriaNotas, i));