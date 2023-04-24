const Comment = require("../models/Comment");
const Post = require("../models/Post");

const CommentController = {

    //ENDPOINT: CREATE COMMENT
    async create(req, res) {
        try {
            const comment = await Comment.create(req.body)
            res.status(201).send({ message: 'Ha publicado el siguiente comentario:', comment})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el comentario' })
        }

    },
    //ENDPOINT: DELETE COMMENT (requiere validar autoría)

    async delete(req, res) {
        try {
            const comment = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'This comment has been deleted',comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the comment'})
        }
    },
}

module.exports = CommentController;