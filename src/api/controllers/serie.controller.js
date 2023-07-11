const { log } = require('console');
const Serie = require('../models/serie.model');

const getSeries = async(req, res) => {
    try{
        const allSeries = await Serie.find();
        return res.status(200).json(allSeries)
    } catch(error) {
        return res.status(500).json(error)
    }
}
const getSeriesById = async(req,res)=>{
    try {
        const {id}=req.params;
        const SeriesById = await Serie.findById(id).populate("Capitulos").populate({
            path : 'Resena',
            populate : {
              path : 'Username'
            }
          });
        return res.status(200).json(SeriesById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postSerie = async(req, res) => {
    try {
        console.log(req.file);
        const newSerie = new Serie(req.body);
            if(req.file) {
                newSerie.Imagen = req.file.path
            }
        const createdSerie = await newSerie.save()
        return res.status(201).json(createdSerie);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const putSerie = async(req, res) => {
    try {
        const {id} = req.params;
        const putSerie = new Serie(req.body)
        putSerie._id = id
            if(req.file){
                putSerie.Portada = req.file.path
            }
        const updatedSerie = await Serie.findByIdAndUpdate(id, putSerie)
            if(!updatedSerie){
                return res.status(404).json({message: "El id de esta serie no existe"});
            }
            if(updatedSerie.Portada !== putSerie.Portada){
                deleteFile(updatedSerie.Portada)
            }
        return res.status(200).json(updatedSerie);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteSerie = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedSerie = await Serie.findByIdAndDelete(id);
        if(!deletedSerie){
            return res.status(404).json({message: "El id de la serie no existe"});
        }
        return res.status(200).json(deletedSerie)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

const addCapituloToSerie = async(req, res) => {
    try {
        const {id} = req.params; // id serie
        const id_chapter = req.body._id;

        const updatedSerie = await Serie.findByIdAndUpdate(
            id,
            { $push: { Capitulos: id_chapter } },
            { new: true }
        );
        if (!updatedSerie) {
            return res.status(404).json({ message: "Serie not found." });
        }
        return res.status(200).json(updatedSerie);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const addResenaToSerie = async(req, res) => {
    try {
        const {id} = req.params; // id libro
        const id_review = req.body.idReview;

        const updatedSerie = await Serie.findByIdAndUpdate(
            id,
            { $push: { Resena: id_review } },
            { new: true }
        );
        if (!updatedSerie) {
            return res.status(404).json({ message: "Serie not found." });
        }
        return res.status(200).json(updatedSerie);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getSeries,getSeriesById,postSerie, putSerie, deleteSerie, addCapituloToSerie, addResenaToSerie}