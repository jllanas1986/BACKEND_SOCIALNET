const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');
const { authentication, isAuthorComment } = require('../middlewares/authentication');

router.post('/create',authentication, CommentController.create) //ROUTE: Endpoint CREATE comment
router.delete('/delete/:_id', authentication, isAuthorComment, CommentController.delete) // ROUTE: Endpoint DELETE comment


module.exports = router;