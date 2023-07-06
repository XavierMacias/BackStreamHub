const { deleteFile } = require('../../middlewares/delete.file');
const Capitulo = require('../models/capitulo.model');

const getCapitulo = async(req,res) => {
    try {
        const allCapitulos = await Capitulo.find();
        return res.status(200).json(allCapitulos);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getCapituloById = async(req,res)=>{
    try {
        const {id}=req.params;
        const capituloById = await Capitulo.findById(id);
        return res.status(200).json(capituloById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postCapitulo = async(req,res) => {
    try {
        console.log(req.file)
        const newCapitulo = new Capitulo(req.body);
        if(req.file){
            newCapitulo.Icono = req.file.path;
        }
        const createdCapitulo = await newCapitulo.save();
        return res.status(201).json(createdCapitulo);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putCapitulo = async(req,res) => {
    try {
        const {id} = req.params;
        const putCapitulo = new Capitulo(req.body);
        putCapitulo._id = id;        
        if(req.file){
            putCapitulo.Portada = req.file.path;
        }
        const updatedCapitulo = await Capitulo.findByIdAndUpdate(id, putCapitulo)
        if(!updatedCapitulo){
            return res.status(404).json({message: "El id de este capitulo no existe"});
        }
        if(updatedCapitulo.Icono !== putCapitulo.Icono){
            deleteFile(updatedCapitulo.Icono);
        }
        return res.status(200).json(updatedCapitulo);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteCapitulo = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedCapitulo = await Capitulo.findByIdAndDelete(id);
        if(!deletedCapitulo){
            return res.status(404).json({message: "El id del capitulo no existe"});
        }
        return res.status(200).json(deletedCapitulo)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getCapitulo,getCapituloById, postCapitulo, putCapitulo, deleteCapitulo}