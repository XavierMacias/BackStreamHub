const Resena = require('../models/resena.model');

const getResenas = async(req,res) => {
    try {
        const allResenas = await Resena.find().populate("Username","Username");
        return res.status(200).json(allResenas);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getResenaById = async(req,res)=>{
    try {
        const {id}=req.params;
        const resenaById = await Resena.findById(id).populate("Username", "Username");
        return res.status(200).json(resenaById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postResena = async(req,res) => {
    try {
        const newResena = new Resena(req.body);
        const createdResena = await newResena.save();
        return res.status(201).json(createdResena);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putResena = async(req,res) => {
    try {
        const {id} = req.params;
        const putResena = new Resena(req.body);
        putResena._id = id;        
        const updatedResena = await Resena.findByIdAndUpdate(id, putResena)
        if(!updatedResena){
            return res.status(404).json({message: "El id de esta reseña no existe"});
        }
        return res.status(200).json(updatedResena);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteResena = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedResena = await Resena.findByIdAndDelete(id);
        if(!deletedResena){
            return res.status(404).json({message: "El id de la reseña no existe"});
        }
        return res.status(200).json(deletedResena)
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getResenas, getResenaById, postResena, putResena, deleteResena}