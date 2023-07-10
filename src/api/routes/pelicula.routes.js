const express = require("express");
const {getPelicula,getPeliculaById, postPelicula, putPelicula, deletePelicula, addResenaToPelicula} = require("../controllers/pelicula.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const peliculaRouter = express.Router();

peliculaRouter.get("/", getPelicula);
peliculaRouter.get("/:id", getPeliculaById);
peliculaRouter.post("/",  upload.single("Portada"), postPelicula);
peliculaRouter.delete("/:id",  deletePelicula);
peliculaRouter.put("/:id",  upload.single("Portada"), putPelicula);
peliculaRouter.put("/addReview/:id", addResenaToPelicula);

module.exports = peliculaRouter;
