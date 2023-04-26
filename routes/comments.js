const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const { authentication, isAuthorComment } = require('../middlewares/authentication');

router.post('/create',authentication, CommentController.create) //ROUTE: Endpoint CREATE comment
router.post('/commentByPostId/:_id',authentication, CommentController.createComment) //ROUTE: Endpoint CREATE comment con ID de post
router.delete('/delete/:_id', authentication, isAuthorComment, CommentController.delete) // ROUTE: Endpoint DELETE comment


module.exports = router;