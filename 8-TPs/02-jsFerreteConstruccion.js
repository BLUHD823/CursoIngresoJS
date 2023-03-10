/*
Alumno: Alejo Nehuén Paiva
Trabajo Práctico: 2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = largo * 2 + ancho * 2;

    resultado = perimetro * 3;

    alert("La cantidad de alambre a usar es de " + resultado + " metros.")
}
function Circulo () 
{   
   let radio;
   let perimetro;
   let resultado;
   const Pi = 3.14;

   radio = document.getElementById("txtIdRadio").value;
   radio = parseInt(radio);
   perimetro = 2 * Math.PI * radio;
   resultado= perimetro * 3;
   /* toFixed(cantidad de decimales para números con coma)*/
   alert("La cantidad de alambre a usar es de " + resultado.toFixed(2) + " metros.")
}
function Materiales () 
{
    let ancho;
    let largo;    
    const CEMENTO = 2;
    const CAL = 3;
    let area_Rect;
    let total_CAL;
    let total_Cemento;
    let resultado;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area_Rect  = ancho * largo;
    
    total_Cemento = CEMENTO * area_Rect;
    total_CAL = CAL * area_Rect;

    alert("Se necesitan de cal " + total_CAL + " y se necesitan " + total_Cemento + " de cemento.")
}