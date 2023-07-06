const express = require("express");
const {getResenas, getResenaById, postResena, putResena, deleteResena} = require("../controllers/resena.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const resenaRouter = express.Router();

resenaRouter.get("/", getResenas);
resenaRouter.get("/:id", getResenaById);
resenaRouter.post("/",  postResena);
resenaRouter.delete("/:id",  deleteResena);
resenaRouter.put("/:id", putResena);

module.exports = resenaRouter;