/*
Alumno: Alejo
Ejercicio: 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value)
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value)
	/*El % se usa para sacar el resto de una división. Puede ser usado para identificar si números son enteros o no  */
	resto = dividendo % divisor;
	alert("El resto es: " + resto);
}
