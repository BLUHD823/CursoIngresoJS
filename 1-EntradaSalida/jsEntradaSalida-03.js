/******************************************************************************

Ejercicio 2:
Para una escuela de música se necesita un programa que permita ingresar los datos de los estudiantes, hasta que el cliente quiera. 
Por cada estudiante, se ingresa:
Nombre completo,
Instrumento que toca (validar "guitarra", "piano", "batería"),
Edad (entre 7 y 18),
Horas de estudio por semana (más de 0 y menos de 57),
Precio por hora (desde 200 hasta 500).

Se pide informar por alert o document write: 

1-Si el estudiante realiza más de 30 Hs semanales, tiene un descuento del 10% sobre el precio bruto. 
    Informar el total recaudado de todos los estudiantes y los casos cuando corresponde descuento).
2-El estudiante con más horas de estudio por semana de batería. 
3-Cantidad de estudiantes que tocan piano y tienen más de 12 años. 
4-La actividad que posee menos estudiantes.


*******************************************************************************/

function mostrar()
{
	let respuesta = "Si";
	let nombre;
	let instrumento;
	let edad = 0;
	let precio = 0;
	let horas = 0;
	let descuento = 0;
	let acumuladorTotal = 0;
	let banderaHorasMayor = 0;
	let horasMayor = 0;
	let nombreMayor;
	let contadorPiano = 0;
	let contadorGuitarra = 0;
	let contadorBateria = 0;
	let contadorPianoEdad = 0;
	let banderaActividad = 0;
	let actividadMenor = 0;
	let nombreActividadMenor;
	let resta = 0;


	while (respuesta == "Si") {
		nombre = prompt("Ingrese su nombre completo.");
	
		instrumento = prompt("Ingrese el nombre del instrumento .");
		while (instrumento != "guitarra" && instrumento != "piano" && instrumento != "batería" ) {
			instrumento = prompt("Reingrese el instrumento.");
		}
	
		edad = prompt("Ingrese la edad del jugador.");
		edad = parseInt(edad);
		while (edad < 7 || edad > 18) {
			edad = prompt("Reingrese la edad.");
			edad = parseInt(edad);
		}
	
		horas = prompt("Ingrese la horas.");
		horas = parseInt(horas);
		while (horas < 0 || horas > 57) {
			horas = prompt("Reingrese la horas.");
			edad = parseInt(edad);
		}
	
		precio = prompt("Ingrese el precio.");
		precio = parseInt(precio);
		while (precio < 200 || precio > 500) {
			precio = prompt("Reingrese su precio");
			precio = parseInt(precio);
		}
		
	
		switch (instrumento) {
			case "piano":
				contadorPiano = contadorPiano + 1;
				if (edad >= 12) {
					contadorPianoEdad = contadorPianoEdad + 1;
				}
	
				break;
	
	
			case "guitarra":
				contadorGuitarra = contadorGuitarra + 1;
	
				break;
	
			case "batería":
				contadorBateria = contadorBateria + 1;
				if (banderaHorasMayor < 1 || horas > horasMayor) {
					banderaHorasMayor = banderaHorasMayor + 1 ;
					horasMayor = horas;
					nombreMayor = nombre;
				}
				break;
		
		
		}
	
	
		if (horas>=30) {
			descuento = (precio*10)/100;
			resta = precio - descuento;
			acumuladorTotal  = acumuladorTotal + resta;
		}else {
			acumuladorTotal = acumuladorTotal + precio;
		}
	
		
		
		
		if (banderaActividad < 1) {
			actividadMenor = instrumento;
		}
	
	
	
		respuesta = prompt("¿Quiere seguir ingresando datos?")
	}

	if (contadorPiano < contadorBateria && contadorPiano < contadorGuitarra) {
		actividadMenor = "Piano.";
	}else{
		if (contadorGuitarra < contadorBateria && contadorGuitarra < contadorPiano) {
			actividadMenor = "Guitarra."
		}else {
			if (contadorBateria < contadorGuitarra && contadorBateria < contadorPiano) {
				actividadMenor = "Batería;"
			}
		}
	}

	alert("El total recaudado de todos los estudiantes:"+acumuladorTotal );
	alert("El estudiante con más horas de estudio por semana de batería es "+ nombreMayor);
	alert("Cantidad de estudiantes que tocan piano y tienen más de 12 años: "+ contadorPianoEdad);
	alert("La actividad que posee menos estudiantes es "+actividadMenor);

}


