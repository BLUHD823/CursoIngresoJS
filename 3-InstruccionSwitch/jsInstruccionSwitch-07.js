function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Se encuentra en el Oeste del país.");
		break;
		
		case "Cataratas":
			alert("Se encuentra al Norte del país.");
		break;

		case "Mar del plata":
			alert("Se encuentra en el Este del país.");
		break;

		default:
			alert("Se encuentra en el Sur del país.");
		break;
	}

}//FIN DE LA FUNCIÓN