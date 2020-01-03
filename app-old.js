/**
 * Vamos a montar un WebServer
 */

 const http = require('http');

 // creamos el servidor
 // req son las solicitudes que recibe nuestro servidor
 // res son las solicitudes que envia nuestro servidor
 http.createServer( (req, res) => {

    // manda un status 200, que significa que se hace correctamente.
    // devolvemos un json por ejemplo, y que sea un servicio.
    res.writeHead(200, { 'Content-Type': 'application/json'})
    
    let salida = {
        nombre: 'Maxi',
        edad: 29,
        url: req.url
    }

    res.write( JSON.stringify( salida ));
    
    //res.write('Hola Mundo!');
    res.end(); //con esto indicamos que ya se termino de armar la respuesta

 })
 .listen(8080); // nuestro servidor va a estar escuchando el puerto 8080

 console.log('Escuchando el puerto 8080');