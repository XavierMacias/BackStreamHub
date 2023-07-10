const User = require('../api/models/user.model');
const mongoose = require('mongoose');

const arrayUsers = [
    
    {
        "Username": "Nerea",
        "Email": "nerea@gmail.com",
        "Password": "Nerea123$",
        "PeliculasFavoritas": [],
        "SeriesFavoritas": [],
        "LibrosFavoritos": [],
        "Role": "admin"
    },
    {
        "Username": "Xavi",
        "Email": "xavi@gmail.com",
        "Password": "Xavi123$",
        "PeliculasFavoritas": [],
        "SeriesFavoritas": [],
        "LibrosFavoritos": [],
        "Role": "admin"
    },
    {
        "Username": "Santi",
        "Email": "santi@gmail.com",
        "Password": "Santi123$",
        "PeliculasFavoritas": [],
        "SeriesFavoritas": [],
        "LibrosFavoritos": [],
        "Role": "admin"
    },
    {
        "Username": "Cristian",
        "Email": "cristian@gmail.com",
        "Password": "Cristian123$",
        "PeliculasFavoritas": [],
        "SeriesFavoritas": [],
        "LibrosFavoritos": [],
        "Role": "admin"
    },

]


mongoose.connect('mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/StreamHub?retryWrites=true&w=majority')
.then(async () => {
    const allusers = await User.find()
    if(allusers.length > 0){
        await User.collection.drop()
        console.log('usuarios borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const usuariosMap = arrayUsers.map((user) => new User(user))
    await User.insertMany(usuariosMap)
    console.log('usuarios añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());