const express = require("express");
const {getSeries,getSeriesById,postSerie, putSerie, deleteSerie,addCapituloToSerie, addResenaToSerie} = require("../controllers/serie.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const seriesRouter = express.Router();

seriesRouter.get("/", getSeries);
seriesRouter.get("/:id", getSeriesById);
seriesRouter.post("/",  upload.single("Portada"), postSerie);
seriesRouter.delete("/:id",  deleteSerie);
seriesRouter.put("/:id",  upload.single("Portada"), putSerie);
seriesRouter.put("/addChapter/:id", addCapituloToSerie);
seriesRouter.put("/addReview/:id", addResenaToSerie);

module.exports = seriesRouter;