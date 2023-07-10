const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serieSchema = new Schema(
    {
        Portada: {type: String, require: true},
        Nombre: {type: String, required: true},
        Trailer: {type: String, require: true},
        Genero: [{type: String}],
        Descripcion: {type: String, required: true},
        Capitulos: [{type: Schema.Types.ObjectId, ref:'capitulo'}],
        Valoracion: {type: Number},
        Resena: [{type: Schema.Types.ObjectId, ref:'resena'}]
    },{
        timestamps: true
    }
)

const Serie = mongoose.model('serie', serieSchema);

module.exports = Serie;