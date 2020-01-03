/**
 * Servidor con express
 */


const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers') 

// process.env.PORT nos devuleve el puerto por el cual va a estar escuchando nuestra aplicacion.
// en el caso de Heroku, no sabemos que puerto nos va a dar cuando subamos la aplicacion, por eso,
// con esta variable, obtenemos ese puerto.
const port = process.env.PORT || 3000;

// Middleware
// es una instruccion o un callback que se va a ejecutar siempre, sin importar que url pida una persona
// debemos especificar el folder que queremos servir, en este caso '/public'
app.use( express.static(  __dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs')




// se configura una solicitud GET para cuando el path sea '/' se ejecute la funcion que va como parametro.
app.get('/', (req, res) => {
    // res.send('Hello World')

    // let salida = {
    //     nombre: 'Maxi',
    //     edad: 29,
    //     url: req.url
    // }

    // res.send(salida);

    // se pasa como parametro el nombre del archivo .hbs sin la extension
    // en este caso rendiriza la pagina home.hbs
    // (*) nombre y anio son variables que se pasan por paramtro para que lo utilice la pagina.
    //     Es una especie de two data binding.
    
    // (*) esto se reemplaza por los helpers
    res.render('home', {
        nombre: 'maximiLiano'
    });

    
})



app.get('/about', (req, res) => {

    res.render('about');

    
})


 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`)
})