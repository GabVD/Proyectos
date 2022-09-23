const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const valor = new Schema({
    NOMBRE: String,
    APELLIDO: String,
    FECHANAC: Date
});
module.exports = mongoose.model('valores', valor);