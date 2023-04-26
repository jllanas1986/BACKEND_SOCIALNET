const Comment = require("../models/Comment");
const Post = require("../models/Post");


const CommentController = {

    //ENDPOINT: CREATE COMMENT
    async create(req, res) {
        try {
            const comment = await Comment.create(req.body)
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { commentIds: req.comment._id } },
                // { $push: { commentIds: req.comment.ObjectId } },
                { new: true });
            res.status(201).send({ message: 'Ha publicado el siguiente comentario:', comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el comentario' })
        }
    },

    //ENDPOINT: CREATE COMMENT (V.2)

    async createComment(req, res) {
        try {
            const comment = await Comment.create({ ...req.body, userId: req.user._id })
            await Post.findByIdAndUpdate(
                req.params._id,
                {
                    $push: { commentIds: comment._id }
                },
                { new: true }
            );
            res.send(comment);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with your comment" });
        }
    },


    //ENDPOINT: DELETE COMMENT (requiere validar autoría)

    async delete(req, res) {
        try {
            const comment = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'This comment has been deleted', comment })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the comment' })
        }
    },
}

module.exports = CommentController;