//inicializacion de modulos
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require('./backend/rutas');

require('dotenv').config({ path: 'variable.env'});

//configuracion
mongoose.connect(process.env.DBNAME,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//carga de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

//app.set('port', process.env.port || 3000);

const host=process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

//Iniciar el servidor
app.listen(port, host, () => {
    console.log("Escuchando en el puerto 5000");
});