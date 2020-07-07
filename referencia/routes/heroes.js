const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroesController')

router.get('/',heroesController.index);
router.get('/detalle/:id',heroesController.detalle);
router.get('/bio/:id/:ok?',heroesController.bio);


module.exports = router;