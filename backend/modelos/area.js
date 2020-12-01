var mongoose = require("mongoose");
var EsquemaArea = mongoose.Schema({
    Nombre: String,
    Apellidos: String,
    Correo: String,
    Celular: String
});
module.exports = mongoose.model("Contactos", EsquemaArea,"Contactos");