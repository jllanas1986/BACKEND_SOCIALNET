// FALTA TESTEAR 
const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication } = require('../middlewares/authentication');

router.post('/create', authentication, PostController.create) //ROUTE: Endpoint CREATE post
router.put('/update/:_id', authentication, PostController.update) // ROUTE: Endpoint UPDATE post
router.delete('/delete/:_id', authentication, PostController.delete) // ROUTE: Endpoint UPDATE post



module.exports = router;