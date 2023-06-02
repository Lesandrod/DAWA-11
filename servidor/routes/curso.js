//Rutas producto
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');


router.get('/', cursoController.obtenerCursos);

module.exports = router;