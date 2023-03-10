/*Alumno: Alejo Paiva
Ejercicio: 5*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17 ){
		alert("No Es adolescente");
	}else if (edad < 13){
		alert("No es adolescente");
	}
}