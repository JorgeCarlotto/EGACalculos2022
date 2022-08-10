const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');


router.get('/',mainController.cargarDatos);
router.post('/',mainController.cargarDatos);
router.get('/puntoProbableDeEncuentro',mainController.puntoProbableDeEncuentro);
router.post('/puntoProbableDeEncuentro',mainController.puntoProbableDeEncuentro);


module.exports = router;