/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0;
	var contadorPar=0;
	var contadorInpar=0;
	let modulo;
	
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado)

		modulo = numeroIngresado % 2;

		if (numeroIngresado === 0) {
			contadorCero = contadorCero + 1;
		} else {
			if (numeroIngresado > 0) {
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorPositivo = contadorPositivo + 1;
			}else{
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativo = contadorNegativo + 1;
			}
		}

		if (modulo == 0) {
			contadorPar = contadorPar + 1;
		} else {
			contadorInpar = contadorInpar +1;
		}
		
		respuesta=prompt("Desea continuar?");
	}//fin del while

	promedioPositivo = sumaPositivos / contadorPositivo;
	promedioNegativo = sumaNegativos / contadorNegativo;
	diferenciaPN = contadorPositivo - contadorNegativo;


	document.write("la suma de negativos es: "+sumaNegativos);
	document.write(" la suma de positivos es: "+sumaPositivos);
	document.write(" la cantidad de números negativos es de: "+contadorNegativo);
	document.write(" la cantidad de números positivos es de: "+contadorPositivo);
	document.write(" la cantidad de ceros es de: "+contadorCero);
	document.write(" la cantidad de números par es de: "+contadorPar);
	document.write(" la cantidad de números impares es de: "+contadorInpar);
	document.write(" El promedio positivo es de: "+promedioPositivo)
	document.write(" El promedio negativo es de: "+promedioNegativo)
	document.write(" La diferencia entre positivos y negativos es de: "+diferenciaPN)





}//FIN DE LA FUNCIÓN