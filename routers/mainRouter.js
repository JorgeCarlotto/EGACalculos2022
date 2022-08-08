const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');


router.get('/',mainController.index);
router.post('/',mainController.cargarDatos);


module.exports = router;