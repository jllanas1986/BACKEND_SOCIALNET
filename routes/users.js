const express = require('express');
const UserController = require('../controllers/UserController');
const { authentication,isAdmin } = require('../middlewares/authentication');
const router = express.Router()

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.delete('/logout',authentication,UserController.logout)
router.delete('/deleteUserById/:_id',authentication, isAdmin, UserController.delete) //Añadido validación como ADMIN para borrar.
router.get('/info', UserController.getInfo)
router.get('/getById/:_id',UserController.getById)
router.get('/getByIndex/:name',UserController.getUsersByName)

module.exports = router;