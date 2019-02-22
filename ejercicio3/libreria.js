/*el instituto "Burro con Birrete" tiene una seccion de alumno donde 
solo existen cinco alumnos necesitan una aplicación web donde donde 
indique el nombre del alumno de mas edad con mejor nota, el alumno mas joven
con peor nota, la alumna con mejor nota. ademas de ello necesita saber el 
promedio de notas de la seccion.

Ten en cuenta que es un array y para llegar a los por ejemplo del
 alumno numero uno se mostraria de la forma que esta abajo
*/

var alumnos = [
    {
        nombre: 'Pedrito Morales',
        notaAnual: 06,
        genero: 'M',
        edad: 15
    },
    {
        nombre: 'Juana Mendez',
        notaAnual: 16,
        genero: 'F',
        edad: 13
    },
    {
        nombre: 'Guillermo Rodriguez',
        notaAnual: 10,
        genero: 'M',
        edad: 14
    },
    {
        nombre: 'Maria Marin',
        notaAnual: 12,
        genero: 'F',
        edad: 16
    },
    {
        nombre: 'Luis Ruiz',
        notaAnual: 02,
        genero: 'M',
        edad: 18
    },
];

//document.write(alumnos[4].genero);

var edad = 0;
posicion = 0;
function mejor() {

    for (paso = 0; paso <= 4; paso++) {
        if (alumnos[paso].edad > edad) {
            edad = alumnos[paso].edad;
            posicion = paso;
        }
    }
    document.write(alumnos[posicion].nombre + ' es alumno con mayor edad <br>');
}
mejor();