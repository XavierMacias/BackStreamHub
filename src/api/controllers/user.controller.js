const { generateSign } = require("../../utils/jwt");
const { validateEmail, validatePassword, usedEmail } = require("../../utils/validators");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const login = async(req, res) => {
    try {
        const userInfo = await User.findOne({Username: req.body.Username});
        if(!userInfo){
            return res.status(404).json({message: 'Username is not registered'});
        }
        if(userInfo.Email != req.body.Email){
            return res.status(404).json({message: 'Email is not registered'});
        }
        if(userInfo.Role == "user") {
            if(!bcrypt.compareSync(req.body.Password, userInfo.Password)){
                return res.status(404).json({message: 'Password is incorrect'});
            }
        } else {
            if(userInfo.Password != req.body.Password){
                return res.status(404).json({message: 'Password is incorrect'});
            }
        }
        const token = generateSign(userInfo._id, userInfo.Email);
        return res.status(200).json({user:userInfo, token:token});
    } catch (error) {
        return res.status(500).json(error); 
    }
};

const register = async(req, res) => {
    try {
        const newUser = new User(req.body);
        //validarEmail
        if(!validateEmail(newUser.Email)){
            return res.status(400).json({message: "Invalid email"})
        }
        //validarPassword
        if(!validatePassword(newUser.Password)){
            return res.status(400).json({message: "Invalid pasword"})
        }

        //validar email usado
        if(await usedEmail(newUser.Email)){
            return res.status(400).json({message: "Email already used"})
        }
        
        //Encriptar Password
        newUser.Password = bcrypt.hashSync(newUser.Password, 10);
        const createdUser = await newUser.save();

        return res.status(201).json(createdUser)
    } catch (error) {
        return res.status(500).json(error); 
    }
};

const checkSession = (req, res) => {
    try {
        console.log("entro en try")
        return res.status(201).json(req.user)
    } catch (error) {
        console.log("entro en catch")
        return res.status(500).json(error); 
    }
}

const getUserById = async(req,res)=>{
    try {
        const {id}=req.params;
        const userById = await User.findById(id);
        return res.status(200).json(userById);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const addPeliculaToFavorito = async(req, res) => {
    try {
        const {id} = req.params; // id usuario
        //const id_review = req.body._id;
        const id_pelicula = req.body.idPelicula;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $push: { PeliculasFavoritas: id_pelicula} },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Pelicula not found." });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const addSerieToFavorito = async(req, res) => {
    try {
        const {id} = req.params; // id usuario
        //const id_review = req.body._id;
        const id_serie = req.body.idSeries;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $push: { SeriesFavoritas: id_serie} },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "serie not found." });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const addLibroToFavorito = async(req, res) => {
    try {
        const {id} = req.params; // id usuario
        //const id_review = req.body._id;
        const id_libro = req.body.idLibro;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $push: { LibrosFavoritos: id_libro} },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "libro not found." });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const removePeliculaFavorito = async(req, res) => {
    try {
        const {id} = req.params; // id usuario
        //const id_review = req.body._id;
        const id_pelicula = req.body.idPelicula;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $pull: { PeliculasFavoritas: id_pelicula} },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Pelicula not found." });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const removeSerieFavorito = async(req, res) => {
    try {
        const {id} = req.params; // id usuario
        //const id_review = req.body._id;
        const id_serie = req.body.idSeries;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $pull: { SeriesFavoritas: id_serie} },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "serie not found." });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const removeLibroFavorito = async(req, res) => {
    try {
        const {id} = req.params; // id usuario
        //const id_review = req.body._id;
        const id_libro = req.body.idLibro;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $pull: { LibrosFavoritos: id_libro} },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "libro not found." });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {login, register, checkSession, getUserById, addLibroToFavorito, addPeliculaToFavorito, addSerieToFavorito, removeLibroFavorito, removePeliculaFavorito, removeSerieFavorito}