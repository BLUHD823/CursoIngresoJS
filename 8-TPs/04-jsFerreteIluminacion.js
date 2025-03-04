/*
Alumno: Alejo Paiva
TP: 4   
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let lamparas = 35;
    let cantidad;
    let marca;
    let precioDescuento;
    let ingresosBrutos;
    let porcentaje;
    let importeFinal;
    let descuento;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    precioDescuento = document.getElementById("txtIdprecioDescuento").value;

    cantidad = parseInt(cantidad);
    precioDescuento = parseInt(precioDescuento);

    if (cantidad >= 6){
        descuento = 50;
    }else{
        if(cantidad == 5 && marca == "ArgentinaLuz"){
        descuento = 40;
        }else{
            if(cantidad == 5 && marca != "ArgentinaLuz"){
                descuento = 30;
            }
        }
    }if(cantidad == 4){
        if(marca == "FelipeLamparas" || marca == "ArgentinaLuz"){
            descuento = 25;
        }else{
            descuento = 20;
        }
    }else{
        if(cantidad == 3){
            if (marca == "ArgentinaLuz"){
                descuento = 15;
            }else{
                if (marca == "FelipeLamparas"){
                    descuento = 10;
                }else{
                    descuento = 5;
                    
                }
            }
        }
    }
    ingresosBrutos = (cantidad*35);
    porcentaje = (ingresosBrutos * descuento) / 100;
    importeFinal = ingresosBrutos - porcentaje;
    document.getElementById("txtIdprecioDescuento").value = importeFinal;

    if(importeFinal > 120){
        let impuesto = (ingresosBrutos * 10)/100;
        importeFinal = importeFinal + impuesto;
        alert("Usted pagó "+ importeFinal +" de IIBB.");
    }
}
