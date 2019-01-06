var fs = require('fs');

fs.readFile('./package.json', function(err, data){
    if(err){
        return console.log('No se pudo abrir el archivo' + err.message)
    }
    console.log(data.toString().length)
});
console.log("Hola Platzi")