function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) {
		case "Bariloche":
			alert("FRÍO");
		break;
		
		case "Cataratas":
			alert("CALOR");
		break;

		case "Mar del plata":
			alert("CALOR");
		break;

		default:
			alert("FRÍO");
		break;
	}

}//FIN DE LA FUNCIÓN