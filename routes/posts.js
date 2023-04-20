// FALTA TESTEAR 
const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');

router.post('/create',PostController.create) //ROUTE: Endpoint CREATE post
router.put('/update/:_id', PostController.update) // ROUTE: Endpoint UPDATE post



module.exports = router;