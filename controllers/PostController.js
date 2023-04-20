const Post = require("../models/Post");

const PostController ={

    //ENDPOINT: CREAR UN POST
    async create(req,res){
        try {
            const post = await Post.create(req.body)
            res.status(201).send(post)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el post' })
        }
    //ENDPOINT:
    
    },

}
module.exports = PostController;