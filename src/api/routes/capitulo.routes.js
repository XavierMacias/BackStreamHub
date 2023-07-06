const express = require("express");

const {getCapitulo,getCapituloById, postCapitulo, putCapitulo, deleteCapitulo
} = require("../controllers/capitulo.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const capituloRouter = express.Router();

capituloRouter.get("/", getCapitulo);
capituloRouter.post("/",  upload.single("Icono"), postCapitulo);
capituloRouter.delete("/:id", deleteCapitulo);
capituloRouter.put("/:id", upload.single("Icono"), putCapitulo);
capituloRouter.get('/:id', getCapituloById);

module.exports = capituloRouter;
