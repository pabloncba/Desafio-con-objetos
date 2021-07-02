class alumno {
    constructor (nombre, apellido, nota1, nota2, promedio) {

            this.nombre=nombre,
            this.apellido=apellido,
            this.nota1=nota1,
            this.nota2=nota2;
            
    }

    
}

let promedio=0;

function capturar () {

   

    nombreIngresado = document.getElementById("nombre").value;
    apellidoIngresado = document.getElementById("apellido").value;
    nota1Ingresado = document.getElementById("nota1").value;
    nota2Ingresado= document.getElementById("nota2").value;

    nuevoAlumno = new alumno (nombreIngresado, apellidoIngresado, nota1Ingresado, nota2Ingresado);   

   calcularPromedio (nota1Ingresado, nota2Ingresado);
}   




function calcularPromedio (nota1, nota2) {


        if (nota1 <= 0 || nota1 > 10) {
    
            alert ("Por favor ingrese notas correctas, gracias");
            
        
    } else {
        promedio = (parseFloat(nota1) + parseFloat (nota2)) / 2;
    
        console.log(promedio);
        
    
        alert (`El promedio final de alumno ${nombreIngresado} es ${promedio}`);
        nuevoAlumno.promedio = promedio; //Agrego promedio al objeto nuevoAlumno
    
        guardarDato(); //llamo a funcion para guardar datos en array
    
        alert("Usted Ingreso las notas de " + datosGuardados.length + " alumno/s")
        
    }
}



let datosGuardados = [];

function guardarDato() {
    datosGuardados.push(nuevoAlumno);
    
    console.log(datosGuardados);
}


function ordenarPorPromedio () {

    datosGuardados.sort(function (a, b) { //metodo para ordenar por item de objeto de mayor a menor
        if (a.promedio < b.promedio) {
          return 1
        }
        if (a.promedio > b.promedio) {
          return -1
        }
         return 0;
    });
    console.log(datosGuardados);
};

function ordenarPorApellido() {
    datosGuardados.sort(function (a, b) {
        if (a.apellido > b.apellido) {
        return 1;
        }
        if (a.apellido < b.apellido) {
        return -1;
        }
        // a must be equal to b
        return 0;
    });

    console.log(datosGuardados);
};
