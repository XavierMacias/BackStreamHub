const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peliculaSchema = new Schema(
    {
        Portada: {type: String, require: true},
        Nombre: {type: String, required: true},
        Trailer: {type: String, required: true},
        Duracion: {type: Number, required: true},
        Fecha: {type: Number},
        Genero: [{type: String}],
        Descripcion: {type: String, required: true},
        Valoracion: {type: Number},
        Resena: [{type: Schema.Types.ObjectId, ref:'resena'}]
    },{
        timestamps: true
    }
)

const Pelicula = mongoose.model('pelicula', peliculaSchema);

module.exports = Pelicula;