const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const capituloSchema = new Schema(
    {
        Icono: {type: String, require: true},
        Nombre: {type: String, required: true},
        Duracion: {type: Number, required: true},
        Temporada: {type: Number, required: true},
        Descripcion: {type: String, required: true}
    },{
        timestamps: true
    }
)

const Capitulo = mongoose.model('capitulo', capituloSchema);

module.exports = Capitulo;