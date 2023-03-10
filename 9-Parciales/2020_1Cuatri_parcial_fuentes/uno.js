
function mostrar()
{
	let contador=0;
	let menorAlcohol=0;
	let mayorCantidad = 0;
	let cantidadMenor;
	let fabricanteMenor;
	let unidadesAlcohol=0;
	let unidadesJabon=0;
	let unidadesBarbijo=0;
	let bandera = 0;
	let banderaCantidad = 0;
	let precioAlcohol = 0;
	let promedioAlcohol = 0;
	let precioJabon = 0;
	let promedioJabon = 0;
	let precioBarbijo = 0;
	let promedioBarbijo = 0;
	while (contador < 5) {
		let producto= prompt("Ingrese el producto, por favor.");
		let precio = prompt("Ingrese el precio del elemento.");
		precio = parseInt(precio);
		let cantidad = prompt("Ingrese la cantidad de productos que se va a llevar.");
		cantidad = parseInt(cantidad);
		let marca = prompt("Ingrese la marca del producto.");
		let fabricante = prompt("Ingrese el fabricante del producto.");
		contador = contador + 1;

		switch (producto) {
			
			case "alcohol":
				unidadesAlcohol = unidadesAlcohol + cantidad;
				precioAlcohol = precioAlcohol + precio;
				
				while (bandera<1) {
					menorAlcohol = precio;
					bandera = bandera + 1;
				}
				if (precio >= 100 && precio <= 300) {
					if (precio <= menorAlcohol){
						menorAlcohol = precio;
						marcaMenor = marca;
						cantidadMenor = cantidad;
						fabricanteMenor = fabricante;
					}
				}else{
					alert("Precio equivocado, porfavor reinicie la carga de datos.");
				}
				
				if (unidadesAlcohol > mayorCantidad) {
					mayorTipo = "alcohol";
					mayorCantidad = unidadesAlcohol; 
				}
				break;

				
		
			case "jabón":
				unidadesJabon = unidadesJabon + cantidad;
				if (unidadesJabon > mayorCantidad) {
					mayorTipo = "jabón";
					mayorCantidad = unidadesJabon; 
				}
				precioJabon = promedioJabon + precio;
				
				break;

			case "barbijo":
				unidadesBarbijo = unidadesBarbijo + cantidad;
				precioBarbijo = precioBarbijo + precio;
				
				if (unidadesBarbijo > mayorCantidad) {
					mayorTipo = "barbijo";
					mayorCantidad = unidadesBarbijo; 
				}
				break;
		}
		
	}
	promedioJabon = precioJabon/unidadesJabon;
	promedioBarbijo = precioBarbijo/unidadesBarbijo;
	promedioAlcohol = precioAlcohol/unidadesAlcohol;
	
	alert("El más barato de los alcohol es de "+marcaMenor+". Se pidieron "+ cantidadMenor+" y su fabricante es "+ fabricanteMenor);
	alert("El tipo de productos con mayor cantidad es "+ mayorTipo +" con la cantidad de " + mayorCantidad);
	alert("El promedio de alcohol es de "+promedioAlcohol);
	alert("El promedio de jabón es de "+promedioJabon);
	alert("El promedio de barbijo es de "+promedioBarbijo);


}
