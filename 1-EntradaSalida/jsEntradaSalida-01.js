/*
Ejercicio 1:
Para una tienda de deportes se necesita un programa que permita ingresar los datos de los jugadores de fútbol que han comprado una camiseta, 
hasta que el cliente quiera. 
Por cada jugador, se ingresa:

Nombre del jugador,
Equipo al que pertenece (validar "Barcelona", "Real Madrid", "Bayern Munich"),
Posición en el campo (validar "delantero", "defensa", "portero"),
Edad (entre 18 y 40),
Precio de la camiseta (más de 5 dígitos, sin ceros a la izquierda).



Se pide informar por alert o document write:

1-El porcentaje de camisetas vendidas por equipo [Barcelona: 40%, Real Madrid: 40%, Bayern Munich: 20%] la suma debe dar 100%.
2-El importe total recaudado por la venta de camisetas.
3-Promedio de edad de los jugadores que compraron camisetas de Barcelona.


*******************************************************************************/
function mostrar()
{	
	let respuesta = "Si";
	let nombre;
	let equipo;
	let posicion;
	let edad = 0;
	let precio = 0;
	let contadorBar = 0;
	let contadorReal = 0;
	let contadorBay = 0;
	let porcetajeBar = 0;
	let porcentajeReal = 0;
	let porcentajeBay = 0;
	let totalCamisetas = 0;
	let acumuladorEdad = 0;
	let importeTotal = 0; 
	let promedioEdad= 0;

	while (respuesta == "Si") {
		nombre = prompt("Ingrese el nombre del jugador.");

    	equipo = prompt("Ingrese el equipo del jugador.");
    	while (equipo != "Barcelona" && equipo != "Real Madrid" && equipo != "Bayern Munich" ) {
        	equipo = prompt("Reingrese el equipo.");
    	}

		posicion = prompt("Ingrese el posicion del jugador.");
    	while (posicion != "delantero" && posicion != "defensa" && posicion != "portero" ) {
        	posicion = prompt("Reingrese el equipo.");
    	}

		edad = prompt("Ingrese la edad del jugador.");
    	edad = parseInt(edad);
   	 	while (edad < 18 || edad > 40) {
        	edad = prompt("Reingrese la edad.");
        	edad = parseInt(edad);
    	}

		precio = prompt("Ingrese el precio del jugador.");
   	 	precio = parseInt(precio);
    	while (precio < 10000 || precio > 99999) {
        	precio = prompt("Reingrese su precio");
        	precio = parseInt(precio);
    	}

		switch (equipo) {
			case "Barcelona":
				acumuladorEdad = acumuladorEdad + edad;
				contadorBar = contadorBar + 1;

				break;


			case "Real Madrid":
				contadorReal = contadorReal + 1;

				break;

			case "Bayern Munich":
				contadorBay = contadorBay + 1;

				break;
		
		
		}
		importeTotal = importeTotal + precio;
		totalCamisetas = totalCamisetas + 1;
		respuesta = prompt("¿Quiere seguir ingresando datos?");
	}

	promedioEdad = acumuladorEdad/contadorBar;

	porcetajeBar = (contadorBar*100)/totalCamisetas;
	porcentajeReal = (contadorReal*100)/totalCamisetas;
	porcentajeBay = (contadorBay*100)/totalCamisetas;

	alert("El porcentaje de camisetas vendidas de Barcelona: "+porcetajeBar);
	alert("El porcentaje de camisetas vendidas de Real Madrid: "+porcentajeReal);
	alert("El porcentaje de camisetas vendidas de Bayern Munich: "+porcentajeBay);

	alert("El importe total recaudado por la venta de camisetas. "+ importeTotal);
	alert("Promedio de edad de los jugadores que compraron camisetas de Barcelona. "+ promedioEdad);


}

