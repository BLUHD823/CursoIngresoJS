/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	//numeroIngresado = prompt("Ingrese un número.");
	//numeroIngresado = parseInt(numeroIngresado);
	//acumulador = acumulador + numeroIngresado;
	//contador = 1;
	
	
	if (respuesta == "si") {
		while (respuesta != "no") {
			numeroIngresado = prompt("Ingrese un número.");
			numeroIngresado = parseInt(numeroIngresado);
			if (numeroIngresado >0 ){
				sumaPositivos = sumaPositivos + numeroIngresado;
			}else{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
			contador= contador +1;
			respuesta = prompt("¿Quiere seguir ingresando números?");
		}
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN