const readlineSync = require('readline-sync'); // require se usa para importar una libreria

const {mostrarListaEstudiantes} = require('./lista_estudiantes.js'); //require lo podemos usar para importar un codigo

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readlineSync.question("Ingrese la cantidad de estudiantes a registrar:");
    const estudiantes = [];

    for (let i = 0; i < cantidadEstudiantes; i++) {
        const nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i}:`);
        const edad = readlineSync.question(`Ingrese la edad de ${nombre}:`);

        const estudiante = {
            nombre,
            edad
        };;
        estudiantes.push(estudiante);
    }
mostrarListaEstudiantes(estudiantes);
};

//Iniciar el registro de estudiantes
registrarEstudiantes();