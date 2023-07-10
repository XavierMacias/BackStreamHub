const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const libroSchema = new Schema(
    {
        Portada: {type: String, require: true},
        Nombre: {type: String, required: true},
        Autor: {type: String, required: true},
        Genero: [{type: String}],
        Descripcion: {type: String, required: true},
        Valoracion: {type: Number},
        Resena: [{type: Schema.Types.ObjectId, ref:'resena'}]
    },{
        timestamps: true
    }
)

const Libro = mongoose.model('libro', libroSchema);

module.exports = Libro;