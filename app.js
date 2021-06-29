

function capturar() {

    function alumno (nombre, apellido, nota1, nota2){

        this.nombre=nombre,
        this.apellido=apellido,
        this.nota1=nota1,
        this.nota2=nota2;
    }
    
     nombreIngresado = document.getElementById("nombre").value;
     apellidoIngresado = document.getElementById("apellido").valueM
     nota1Ingresado = document.getElementById("nota1").value
     nota2Ingresado= document.getElementById("nota2").value

    let nuevoAlumno = new alumno (nombreIngresado, apellidoIngresado, nota1Ingresado, nota2Ingresado);

    calcularPromedio (nota1Ingresado, nota2Ingresado);


}


function calcularPromedio (nota1, nota2) {


    if (nota1 <= 0 || nota1 > 10) {

        alert ("Por favor ingrese notas correctas, gracias");
        
    
} else {
    promedio = (parseFloat(nota1) + parseFloat (nota2)) / 2;

    console.log(promedio);
    

    alert (`El promedio final de alumno ${nombreIngresado} es ${promedio}`)
    
}
}

