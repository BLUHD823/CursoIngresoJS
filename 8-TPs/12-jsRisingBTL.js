/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de 
datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
isNan(legajo) se usa en el while isNan[Not a Number]
*/
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldo;
	var legajo;
	var nacionalidad; 

	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);

	while (edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = prompt("Reingrese su edad a una correcta.");
		edadIngresada = parseInt(edadIngresada);
	}
	
	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("Ingrese su sexo: M o F.");

	while (sexoIngresado !== "M" && sexoIngresado !== "F") {
		sexoIngresado = prompt("Reingrese un sexo correcto");
		
	}
	

	if (sexoIngresado == "M") {
		txtIdSexo.value = "Masculino";
	}else{
		txtIdSexo.value = "Femenino";
	}
	


	estadoCivilIngresado = prompt("Ingrese su estado civil: 1-Soltero 2-Casados 3-Divorciados 4-Viudos.");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4) {
		estadoCivilIngresado = prompt("Vuelva a ingresar su estado civil.");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);

	}
	switch (estadoCivilIngresado) {
		case 1:
			txtIdEstadoCivil.value = "Soltero.";

			break;
		
		case 2:
			txtIdEstadoCivil.value = "Casado.";
	
			break;

		case 3:
			txtIdEstadoCivil.value = "Divorciado.";
	
			break;

		case 4:
			txtIdEstadoCivil.value = "Viudos.";
	
			break;

	}

	sueldo = prompt("Ingrese su sueldo bruto, no puede ser menor a 8800.");
	sueldo = parseInt(sueldo);

	while (sueldo < 8800) {
		sueldo = prompt("Ingrese un sueldo correcto.");
		sueldo = parseInt(sueldo);
	}

	txtIdSueldo.value = sueldo;



	legajo = prompt("Ingrese su número de legajo. Tiene que ser de 4 cifras y sin ceros a la izquierda.");
	legajo = parseInt(legajo);

	while (legajo < 1000 || legajo > 9999 || isNaN(legajo))  {
		legajo = prompt("Reingrese un legajo correcto.");
		legajo = parseInt(legajo);
	}

	txtIdLegajo.value = legajo;

	nacionalidad = prompt("Ingrese su nacionalidad: A para argentinos, E para extranjeros y N para nacionalizados.");
	
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")	 {
		nacionalidad = "Reingrese su nacionalidad.";
	}

	switch (nacionalidad) {
		case "A":
			txtIdNacionalidad.value = "Argentino.";

			break;
		
		case "E":
			txtIdNacionalidad.value = "Extranejero.";	

			break;

		case "N":
			txtIdNacionalidad.value = "Nacionalizado.";	
			
			break;

	}
}
