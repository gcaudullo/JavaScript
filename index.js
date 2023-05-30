
function solicitoNombre(){
    let nombreCompleto = prompt("Ingrese Nombre y Apellido: ");
    return (nombreCompleto)
}

function solicitoNota(){
    let nota = parseInt(prompt("Ingrese Nota del alumno: "));
    return (nota)
}

function dividir(dividendo, divisor){
    return dividendo/divisor;
}


alert("Este programa calcula el promedio de las notas de una clase");
alert("Para ello ingrese Nombre completo y nota adquirida por el alumno");
alert("Para finalizar el listado escriba Fin");
let nombreCompleto = solicitoNombre();
let i=0;
let notas=0;
let nota=0;
while(nombreCompleto!="Fin"){
    nota =solicitoNota()
    if(nota>12 || nota<1) {
        console.log("nota fuera del rango permitido 1..12");
    }
    else{
        notas= notas + nota;
        nombreCompleto = solicitoNombre();
        i+=1;
    }
}
console.log("El promedio de notas por alumno es: " + dividir(notas,i))