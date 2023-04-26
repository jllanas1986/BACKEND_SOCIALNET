const User = require('../models/User');
const Post = require('../models/Post'); // Hay que declararlo o el middleware de Post NO funcionará
const Comment = require('../models/Comment'); // Hay que declararlo o el middleware de Comment NO funcionará
const jwt = require('jsonwebtoken');
//const { jwt_secret } = require('../config/keys.js') // Ya no se necesita porque no lo cogemos de keys
require("dotenv").config();

//MIDDLEWARE (función) verificar TOKEN
const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: payload._id, tokens: token });
        if (!user) {
            return res.status(401).send({ message: 'No estas autorizado' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}

//MIDDLEWARE (función) verificar ROL DE ADMINISTRADOR (WIP-Para borarr usuarios)
const isAdmin = async(req, res, next) => {
    const admins = ['admin','superadmin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
        message: 'You do not have permission'
    });
    }
    next();
}

//MIDDLEWARE (función) verificar AUTORÍA de Posts 
const isAuthor = async(req, res, next) => {
    try {
    const post = await Post.findById(req.params._id);
    if (post.userId.toString() !== req.user._id.toString()) {
    return res.status(403).send({ message: 'Este post no es tuyo maldito troll!' });
    }
    next();
    } catch (error) {
    console.error(error)
    return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría del post.Estas a un paso de la carcel' })
    }
}

//MIDDLEWARE (función) verificar AUTORÍA de Comentarios 
const isAuthorComment = async(req, res, next) => {
    try {
    const comment = await Comment.findById(req.params._id);
    if (comment.userId.toString() !== req.user._id.toString()) {
    return res.status(403).send({ message: 'Este comentario no es tuyo maldito troll!' });
    }
    next();
    } catch (error) {
    console.error(error)
    return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría del comentario.Estas a un paso de la carcel' })
    }
}

module.exports = { authentication, isAdmin, isAuthor, isAuthorComment }

