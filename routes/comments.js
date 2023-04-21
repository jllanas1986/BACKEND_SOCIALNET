// FALTA TESTEAR 
const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/CommentController');

router.post('/create',CommentController.create) //ROUTE: Endpoint CREATE comment



module.exports = router;