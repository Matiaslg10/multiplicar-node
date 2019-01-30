const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                //console.log(colors.green('Hello %s'), name);
                console.log(`Archivo creado: `, colors.green(archivo))
            })
            .catch((e) => {
                console.log(e)
            });

        break;

    default:
        console.log("Comando no reconocido");
        break;

}


//console.log(argv);

//console.log(argv.base);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1];