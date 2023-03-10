/*
Alumno: Alejo
Ejercicio: 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
	/*parseInt() convierte strings a enteros*/
	let num = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num + num2;
	alert("La suma es: " + suma);
}

