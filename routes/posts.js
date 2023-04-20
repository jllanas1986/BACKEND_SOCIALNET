const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');

router.post('/create',PostController.create) //RUTA: Endpoint CREAR producto




module.exports = router;