/*
Alumno: Alejo
Ejercicio: 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porcentaje;
	porcentaje = prompt("Ingrese un porcentaje.");

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	cuenta = (sueldo * porcentaje)/100;
	resultado = sueldo + cuenta;
	document.getElementById("txtIdResultado").value = resultado;
}

