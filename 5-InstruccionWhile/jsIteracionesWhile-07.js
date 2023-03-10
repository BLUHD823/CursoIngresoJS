/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	
	if (respuesta == "si") {
		while (respuesta != "no") {
			numeroIngresado = prompt("Ingrese un número.");
			numeroIngresado = parseInt(numeroIngresado);
			acumulador = acumulador + numeroIngresado;
			contador= contador +1;
			respuesta = prompt("¿Quiere seguir ingresando números?");
		}
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN