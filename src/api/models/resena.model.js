const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resenaSchema = new Schema(
    {
        Username: {type: Schema.Types.ObjectId, ref:'user'},
        Titulo: {type: String, require: true},
        Comentario: {type: String, require: true},
        Valoracion: {type: Number}
    },{
        timestamps: true
    }
)

const Resena = mongoose.model('resena', resenaSchema);

module.exports = Resena;