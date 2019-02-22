
/*Hacer una aplicacion donde se introduzca 4 numeros y muestre en una caja de texto 
el resultado de =(A*B)/(C-D); Hacerlo pidiendo los datos desde etiquetas <input type="text">. 
el resultado debe ser mostrado al hacer click en un boton
tambien mostrar un mensaje donde diga si el resultado de esa ecuacion es menor que 10. 
Y tambien si es un valor entre 0 y 10 mostrar un mensaje de ECUACION VALIDA, sino Mostrar ECUACION NO VALIDA.  
El regitro de persona tiene promociones para los usuario q se registren con 

Los usuarios que se registren  con tarjetas de credito tienen descuentos dependiendo de la tarjeta:
visa: 10% de descuento en una cuota
mastercard 20% de descuento en una cuota o 10% en mas de 2 cuotas
cabal: 30% de descuento todas las cuotas
american express: 10% en todas las cuotas
naranja: 20% de descuento en todas las cuotas
para los que no ingresan tarjetas igual hay que decirles que no poseen descuentos. 
*/


function calcular(){
    //document.getElementById('tercero').value = 'Kenia'; input
    //document.getElementById('resultado').innerHTML = 'resultado'; etiquetas html


    var a = document.getElementById('primero').value;
    var b = document.getElementById('segundo').value;
    var c = document.getElementById('tercero').value;
    var d = document.getElementById('cuarto').value;
    var  resultado = 0;

    resultado = (a*b)/(c-d);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('mensaje').style.display='block';
if (resultado<10){
    document.getElementById('menor10').style.display='block';
}else{
    document.getElementById('menor10').style.display='none';
}

if (resultado<=10 && resultado>=0){
    document.getElementById('mensaje').innerHTML = 'Ecuancion Valida';
} else{
    document.getElementById('mensaje').innerHTML = 'Ecuancion Invalida';
}

}

function tdc(tarjeta){
    

    switch (tarjeta){
        case 'visa': mensaje = (cuota == 1)?'Tiene 10% de descuento':''; break;
        case 'master':mensaje = (cuota == 1)?'Tiene 20% de descuneto':'Tiene 10% de descuneto'; break;
        case 'american':mensaje = 'Tiene 10% de descuneto'; break;
        case 'naranja':mensaje ='Tiene 20% de descuneto'; break;
        case 'cabal':mensaje ='Tiene 30% de descuneto'; break;
        default: mensaje; break;
    }
}