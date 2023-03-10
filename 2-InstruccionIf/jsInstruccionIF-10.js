/*Alumno: Alejo Paiva
Ejercicio: 10*/
function mostrar()
{
	random = Math.floor(Math.random() * 10);
	
	if (random == 10 || random== 9){
		alert(random+": EXCELENTE");
	}else {
		if ( random > 4){
			alert(random+": APROBÓ");
		}else {
			alert(random+": Vamos, la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN