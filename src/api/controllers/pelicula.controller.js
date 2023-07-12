const { deleteFile } = require('../../middlewares/delete.file');
const Pelicula = require('../models/pelicula.model');

const getPelicula = async(req,res) => {
    try {
        const allPelicula = await Pelicula.find();
        return res.status(200).json(allPelicula);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getPeliculaById = async(req,res)=>{
    try {
        const {id}=req.params;
        const peliculaById = await Pelicula.findById(id).populate({
            path : 'Resena',
            populate : {
              path : 'Username'
            }
          });
        return res.status(200).json(peliculaById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postPelicula = async(req,res) => {
    try {
        //console.log(req.file)
        const newPelicula = new Pelicula(req.body);
        //if(req.file){
        //    newPelicula.Portada = req.file.path;
        //}
        const createdPelicula = await newPelicula.save();
        return res.status(201).json(createdPelicula);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putPelicula = async(req,res) => {
    try {
        const {id} = req.params;
        const putPelicula = new Pelicula(req.body);
        putPelicula._id = id;        
        if(req.file){
            putPelicula.Portada = req.file.path;
        }
        const updatedPelicula = await Pelicula.findByIdAndUpdate(id, putPelicula)
        if(!updatedPelicula){
            return res.status(404).json({message: "El id de esta pelicula no existe"});
        }
        if(updatedPelicula.Portada !== putPelicula.Portada){
            deleteFile(updatedPelicula.Portada);
        }
        return res.status(200).json(updatedPelicula);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deletePelicula = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedPelicula = await Pelicula.findByIdAndDelete(id);
        if(!deletedPelicula){
            return res.status(404).json({message: "El id de la pelicula no existe"});
        }
        return res.status(200).json(deletedPelicula)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

const addResenaToPelicula = async(req, res) => {
    try {
        const {id} = req.params; // id serie
        //const id_review = req.body._id;
        const id_review = req.body.idReview;
        console.log(req.body);

        const updatedPeli = await Pelicula.findByIdAndUpdate(
            id,
            { $push: { Resena: id_review } },
            { new: true }
        );
        if (!updatedPeli) {
            return res.status(404).json({ message: "Pelicula not found." });
        }
        return res.status(200).json(updatedPeli);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getPelicula,getPeliculaById, postPelicula, putPelicula, deletePelicula, addResenaToPelicula}