const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication, isAuthor } = require('../middlewares/authentication');

router.post('/create', authentication, PostController.create) //ROUTE: Endpoint CREATE post
router.put('/update/:_id', authentication, isAuthor, PostController.update) // ROUTE: Endpoint UPDATE post
router.delete('/delete/:_id', authentication, isAuthor, PostController.delete) // ROUTE: Endpoint UPDATE post



module.exports = router;