const express = require("express");
const {getLibros,getLibroById, postLibros, putLibros, deleteLibro, addResenaToLibro
} = require("../controllers/libro.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const libroRouter = express.Router();

libroRouter.get("/", getLibros);
libroRouter.get("/:id", getLibroById);
libroRouter.post("/",  upload.single("Portada"), postLibros);
libroRouter.delete("/:id",  deleteLibro);
libroRouter.put("/:id",  upload.single("Portada"), putLibros);
libroRouter.put("/addReview/:id", addResenaToLibro);

module.exports = libroRouter;