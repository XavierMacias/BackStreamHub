const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        Icono: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/7439/7439967.png'},
        Username: {type: String, required: true},
        Email: {type: String, required: true},
        Password: {type: String, required: true},
        PeliculasFavoritas: [{type: Schema.Types.ObjectId, ref:'pelicula'}],
        SeriesFavoritas: [{type: Schema.Types.ObjectId, ref:'serie'}],
        LibrosFavoritos: [{type: Schema.Types.ObjectId, ref:'libro'}],
        Role: {type: String, default: 'user', enum: ['admin', 'user']}
    }
)

const User = mongoose.model('user', userSchema);

module.exports = User;