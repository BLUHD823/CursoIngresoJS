/*Alumno: Alejo Paiva
Ejercicio: 6*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18 ){
		alert("Es mayor de edad");
	}else if (edad <= 17 && edad >= 13){
		alert("Es adolescente");
	}else if(edad < 13 ){
		alert("Es menor de edad");
	}
}