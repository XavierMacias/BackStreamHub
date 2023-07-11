const { deleteFile } = require('../../middlewares/delete.file');
const Libro = require('../models/libro.model');

const getLibros = async(req,res) => {
    try {
        const allLibros = await Libro.find();
        return res.status(200).json(allLibros);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getLibroById = async(req,res)=>{
    try {
        const {id}=req.params;
        const libroById = await Libro.findById(id).populate({
            path : 'Resena',
            populate : {
              path : 'Username'
            }
          });
        return res.status(200).json(libroById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postLibros = async(req,res) => {
    try {
        console.log(req.file)
        const newLibro = new Libro(req.body);
        if(req.file){
            newLibro.Portada = req.file.path;
        }
        const createdLibro = await newLibro.save();
        return res.status(201).json(createdLibro);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putLibros = async(req,res) => {
    try {
        const {id} = req.params;
        const putLibro = new Libro(req.body);
        putLibro._id = id;        
        if(req.file){
            putLibro.Portada = req.file.path;
        }
        const updatedLibro = await Libro.findByIdAndUpdate(id, putLibro)
        if(!updatedLibro){
            return res.status(404).json({message: "El id de este libro no existe"});
        }
        if(updatedLibro.Portada !== putLibro.Portada){
            deleteFile(updatedLibro.Portada);
        }
        return res.status(200).json(updatedLibro);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteLibro = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedLibro = await Libro.findByIdAndDelete(id);
        if(!deletedLibro){
            return res.status(404).json({message: "El id del libro no existe"});
        }
        return res.status(200).json(deletedLibro)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

const addResenaToLibro = async(req, res) => {
    try {
        const {id} = req.params; // id libro
        const id_review = req.body.idReview;

        const updatedLibro = await Libro.findByIdAndUpdate(
            id,
            { $push: { Resena: id_review } },
            { new: true }
        );
        if (!updatedLibro) {
            return res.status(404).json({ message: "Libro not found." });
        }
        return res.status(200).json(updatedLibro);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getLibros,getLibroById, postLibros, putLibros, deleteLibro, addResenaToLibro}