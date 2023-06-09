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

let ordenDes = parseInt(prompt("A continuación presentaremos la lista de alumnos ingresados: \nSi quiere ordenarlos por nota de mayor a menor presione 1, de lo contrario marque 0: "));
if (ordenDes == 1) {
    // Ordenar el arreglo de alumnos por nota en orden descendente.
    alumnos.sort((a, b) => b.nota - a.nota);
}
//Presento los alumnos y las notas de cada uno de ellos.
alert("los alumnos ingresados y sus notas son: ");
alumnos.forEach((alumno) => {
    alert(alumno.getNombreCompleto() + " - Nota: " + alumno.getNota());
});


// Calculo el promerdio
let promedio = dividir(sumatoriaNotas, i)
alert("El promedio de notas de la clase es: " + promedio.toFixed(2));


// Calculo la desviación estándar de las notas de la clase
let sumatoriaStd = 0;
alumnos.forEach((alumno) => {
    sumatoriaStd += Math.pow(alumno.getNota() - promedio, 2);
});

const desviacionEstandar = Math.sqrt(sumatoriaStd / (i - 1));
alert("La desviación estándar de notas de la clase es: " + desviacionEstandar.toFixed(2));