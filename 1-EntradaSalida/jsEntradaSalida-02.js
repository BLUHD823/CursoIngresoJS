/*
Para una veterinaria se necesita un programa que permita ingresar datos de perros con 
su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).
Se pide informar por alert:
a)El mas pesados de los galgos.
b)El importe total a pagar,y  con descuento (solo si corresponde)
Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total 
a pagar.
Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total 
a pagar.
c)promedio de peso entre cada raza de perros ingresada
d)Nombre, raza y edad del perro más viejo ingresado*/
function mostrar()
{
	let respuesta = "Si";
	let nombre;
	let raza;
	let edad = 0;
	let peso = 0;
	let precioConsulta = 0;
	let banderaPesoGalgoMayor = 0;
	let nombrePesoGalgoMayor;
	let pesoGalgoMayor = 0;
	let contador = 0;
	let acumuladorTotal = 0;
	let descuento = 0;
	let total = 0;
	let sharpeiContador = 0;
	let galgoContador = 0;
	let pastorContador = 0;
	let sharpeiAcumulador = 0;
	let galgoAcumulador = 0;
	let pastorAcumulador = 0;
	let promedioSharpei = 0;
	let promedioGalgo = 0;
	let promedioPastor = 0;
	let banderaEdadMayor = 0;
	let edadMayor=0;
	let razaMayor =0;
	let nombreMayor;


	while (respuesta == "Si") {
	
		nombre = prompt("Ingrese el nombre del perro.");
		raza = prompt("Ingrese la raza.");
		while (raza != "sharpei" && raza != "galgo" && raza != "pastor" ) {
			raza = prompt("Reingrese la raza.");
		}

		edad = prompt("Ingrese la edad del perro.");
		edad = parseInt(edad);
		while (edad < 0 || edad > 25) {
			edad = prompt("Ingrese una edad aceptable.");
			edad = parseInt(edad); 
		}

		peso = prompt("Ingrese el peso del animal.");
		peso = parseInt(peso);
		while (peso < 0) {
			peso = prompt("Ingrese un peso aceptable.");
			peso = parseInt(peso);

		}


		precioConsulta = prompt("Ingrese el  precio de consulta.");
		precioConsulta = parseInt(precioConsulta);
		while (precioConsulta < 500 || precioConsulta > 1500) {
			precioConsulta = prompt("Ingrese un precio aceptable.");
			precioConsulta = parseInt(precioConsulta);
		}

		respuesta = prompt("Ingrese su respuesta.")

		acumuladorTotal = acumuladorTotal + precioConsulta;

		contador = contador + 1;	

		switch (raza) {
			case "sharpei":
				sharpeiAcumulador = sharpeiAcumulador + peso;
				sharpeiContador = sharpeiContador + 1;
				break;
			
			case "galgo":
				galgoContador = galgoContador + 1;
				galgoAcumulador = galgoAcumulador + peso;

				if (banderaPesoGalgoMayor < 1 || peso > pesoGalgoMayor) {
					banderaPesoGalgoMayor = banderaPesoGalgoMayor +1 ;
					pesoGalgoMayor = peso;
					nombrePesoGalgoMayor = nombre;
				}
				
				break;

			case "pastor":
				pastorContador = pastorContador + 1;
				pastorAcumulador = pastorAcumulador + peso;

				break;
			
			default:
				break;
		}

		if (banderaEdadMayor < 1 || edad > edadMayor) {
			banderaEdadMayor = banderaEdadMayor +1 ;
			edadMayor = edad;
			nombreMayor = nombre;
			razaMayor = raza;
		}


	}
	if (contador>=2) {
		descuento = (acumuladorTotal*5)/100;
		total  = acumuladorTotal- descuento;
	}else{
		if (contador >= 4) {
			descuento = (acumuladorTotal*10)/100;
			total  = acumuladorTotal- descuento;
		}
	}

	promedioGalgo = galgoAcumulador/galgoContador;
	promedioSharpei = sharpeiAcumulador/sharpeiContador;
	promedioPastor = pastorAcumulador/pastorContador;

	alert("El mas pesados de los galgos: "+nombrePesoGalgoMayor);
	alert("El importe total a pagar,y  con descuento (solo si corresponde): "+total);
	alert("Promedio Galgo: "+promedioGalgo);
	alert("Promedio Sharpei: "+promedioSharpei) ;
	alert("Promedio Pastor: "+promedioPastor) ;
	alert("Nombre, raza y edad del perro más viejo ingresado:"+nombreMayor+" "+razaMayor+" "+edadMayor);
	alert("");

}

