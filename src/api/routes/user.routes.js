const express = require('express');
const {login, register, checkSession, getUserById, addLibroToFavorito, addPeliculaToFavorito, addSerieToFavorito} = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');
const userRoutes = express.Router();

userRoutes.post('/login', login);
userRoutes.post('/register', register);
userRoutes.get('/checksession',isAuth, checkSession); //quitado siaauth
userRoutes.get('/:id', getUserById);
userRoutes.put('/addPelicula/:id', addPeliculaToFavorito );
userRoutes.put('/addLibro/:id', addLibroToFavorito );
userRoutes.put('/addSerie/:id', addSerieToFavorito );

module.exports = userRoutes;