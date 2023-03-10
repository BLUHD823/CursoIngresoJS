/*
Alumno: Alejo
Ejercicio: 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porcentaje;
	porcentaje = prompt("Ingrese un porcentaje.");

	sueldo = parseInt(document.getElementById("txtIdImporte").value);
	cuenta = (sueldo * porcentaje)/100;
	resultado = sueldo - cuenta;
	document.getElementById("txtIdResultado").value = resultado;
}
