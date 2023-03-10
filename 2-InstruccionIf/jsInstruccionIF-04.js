/*Alumno: Alejo Paiva
Ejercicio: 4*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad <= 17 && edad >= 13){
		alert("Es adolescente");
	}else{
		alert("No es adolescente");

	}
}//FIN DE LA FUNCIÓN