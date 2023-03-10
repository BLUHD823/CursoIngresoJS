/*
Alumno: Alejo
Ejercicio: 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	let num = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num + num2;
	alert("La suma es: " + suma);	
}

function restar()
{
	let num = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = num - num2;
	alert("La resta es: " + resta);	
}


function multiplicar()
{ 
	let num = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	mult = num * num2;
	alert("La multiplicación es: " + mult);	
}

function dividir()
{
	let num = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	div = num / num2;
	alert("La multiplicación es: " + div);	
}

