/******************************************************************************

Ejercicio 3:


En un gimnasio se necesita un programa que permita ingresar datos de 50 socios Por cada socio, se ingresa:

Nombre completo,
Tarifa Base (3500, no se podrá ingresar otro valor),
Edad (entre 18 y 100 años),
Altura (en centímetros, mayor a 100 y menor a 250),
Peso (en kilogramos, mayor a 30 y menor a 200),
Rutina de entrenamiento: Debe elegir entre las opciones "Cardio", "Musculación" o "Funcional".

Se pide calcular e informar por alert o document write:

1-Los socios que realicen:
    A-Musculación, tendrán un descuento del 20%.
    B-Cardio, tendrán un descuento del 20 %.
    C-Funcional, un incremento del 15%.
2-La actividad que más recaudó sin considerar el incremento o el descuento.
3-La cantidad de socios que hacen Musculación y tienen entre 35 y 40 años de edad inclusive.
4-El  Nombre del socio con mayor peso, que hace "Funcional".
5-La diferencia entre el total recaudado sin descuento/incremento y el total recaudado con descuento/incremento.


*******************************************************************************/

function mostrar()
{
	let respuesta = "Si";
	let nombre;
	let tarifa = 0;
	let edad = 0;
	let altura = 0;
	let peso = 0;
	let rutina = 0;
	let descuento = 0;
	let resta = 0;
	let suma = 0;
	let acumuladorCardio = 0;
	let acumuladorFuncional = 0;
	let acumuladorMusculacion = 0;
	let banderaRecaudo = 0;
	let recaudadoMayor = 0;
	let nombreRecaudo;

	

	while (respuesta == "Si") {
		
		nombre = prompt("Ingrese su nombre completo.");

		edad = prompt("Ingrese su edad.");
		edad = parseInt(edad);
		while (edad < 18 || edad > 100) {
			edad = prompt("Reingrese la edad.");
			edad = parseInt(edad);
		}


		tarifa = prompt("Ingrese su tarifa.");
		tarifa = parseInt(tarifa);
		while (tarifa != 3500) {
			tarifa = prompt("Reingrese la tarifa.");
			tarifa = parseInt(tarifa);
		}

		altura = prompt("Ingrese la altura.");
		altura = parseInt(altura);
		while (altura <= 100 || altura >= 250) {
			altura = prompt("Reingrese su altura");
			altura = parseInt(altura);
		}

		rutina = prompt("Ingrese el nombre del rutina .");
		while (rutina != "Cardio" && rutina != "Musculación" && rutina != "Funcional" ) {
			rutina = prompt("Reingrese el rutina.");
		}

		peso = prompt("Ingrese la peso.");
		peso = parseInt(peso);
		while (peso <= 30 || peso >= 200) {
			peso = prompt("Reingrese su peso");
			peso = parseInt(peso);
		}

		switch (rutina) {
			case "Cardio":
				if (banderaRecaudo < 1 ) {
					banderaRecaudo = banderaRecaudo + 1;
					recaudadoMayor = precio;
				}
				acumuladorCardio = acumuladorCardio + precio;
				descuento = (precio*20)/100;
				resta = precio - descuento;
				break;
	
	
			case "Musculación":
				if (banderaRecaudo < 1 ) {
					banderaRecaudo = banderaRecaudo + 1;
					recaudadoMayor = precio;
				}
				acumuladorMusculacion = acumuladorMusculacion + precio;
				descuento = (precio*20)/100;
				resta = precio - resta;
				break;
	
			case "Funcional":
				if (banderaRecaudo < 1 ) {
					banderaRecaudo = banderaRecaudo + 1;
					recaudadoMayor = precio;
				}
				acumuladorFuncional = acumuladorFuncional + precio;
				descuento = (precio*15)/100;
				suma = precio + descuento;
				break;
		
		}



		respuesta = prompt("¿Quiere seguir ingresando datos?");
	}
}

