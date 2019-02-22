/*Un cliente quiere una app que identifique si un nombre introducido tiene mas de 5 letras ademas de eso,
    Debe mostrar si la persona es mayor de edad y con un mensaje formateado de la siguiente forma. 
    inicial del nombre punto Apellido completo no es mayor de edad ejemplo
    E.Marquez es mayor de edad

    Los usuarios que se registren  con tarjetas de credito tienen descuentos dependiendo de la tarjeta:
visa: 10% de descuento en una cuota
mastercard 20% de descuento en una cuota o 10% en mas de 2 cuotas
cabal: 30% de descuento todas las cuotas
american express: 10% en todas las cuotas
naranja: 20% de descuento en todas las cuotas
para los que no ingresan tarjetas igual hay que decirles que no poseen descuentos.
    */
var mensaje = '';

function consulta() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var inicialN = nombre.substring(0,1);
    var nombreF = inicialN + '.' + apellido;
    /*var variable = "Kenia";
alert(variable.length);*/
    document.getElementById('mensajeEdad').style.display = 'block';
    document.getElementById('msjNombre').style.display = 'block';
    if (nombre.length <= 5) {
        document.getElementById('msjNombre').innerHTML = 'nombre es menor que 5';
    } else {
        document.getElementById('msjNombre').innerHTML = 'nombre no es menor que 5';
    }
    if (edad >= 18) {
        document.getElementById('mensajeEdad').innerHTML = nombreF + ' es mayor de edad ';
    } else {
        document.getElementById('mensajeEdad').innerHTML = nombreF + ' no es mayor de edad ';
    }
}

function tdc(tarjeta){

    switch (tarjeta){
        case 'visa': 
        mensaje = (cuota == 1)?'Tiene 10% de descuento':''; 
        break;
        case 'master':
        mensaje = (cuota == 1)?'Tiene 20% de descuento':'Tiene 10% de descuneto'; 
        break;
        case 'american':
        mensaje = 'Tiene 10% de descuento'; 
        break;
        case 'naranja':
        mensaje ='Tiene 20% de descuento'; 
        break;
        case 'cabal':
        mensaje ='Tiene 30% de descuento'; 
        break;
        default: mensaje=''; break;
    }

    if (tarjeta != ''){
        document.getElementById('cuotas').style.display = 'block';
    }else{
        document.getElementById('cuotas').style.display = 'none';
    }
}