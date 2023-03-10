function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;

	switch (destino) {
		case "Bariloche":
			switch (estacionIngresada) {
				case "Invierno":
				case "Otoño":
					msg = "Se vieja";
				break;
			
				default:
					msg = "No se viaja";
				break;
			}	
		break;
		
		case "Cataratas":
			switch (estacionIngresada) {
				case "Invierno":
					msg = "No se vieja";
				break;
			
				default:
					msg = "Se viaja";
				break;
			}	
		break;

		case "Mar del plata":
			switch (estacionIngresada) {
				case "Invierno":
					msg = "No se vieja";
				break;
			
				default:
					msg = "Se viaja";
				break;
			}	
		break;

		case "Cordoba":
			switch (estacionIngresada) {
				case "Primavera":
				case "Otoño":
					msg = "Se vieja";
				break;
			
				default:
					msg = "No se viaja";
				break;
			}	
		break;
	}
	alert(msg)
}//FIN DE LA FUNCIÓN