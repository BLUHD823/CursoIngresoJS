/*Alumno: Alejo Paiva
Ejercicio: 7*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad <= 18){
		if (estadoCivil != "Soltero"){
			alert("Es muy pequeño para ser soltero");
		}
	}

}//FIN DE LA FUNCIÓN