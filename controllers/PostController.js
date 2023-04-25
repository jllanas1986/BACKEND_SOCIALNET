const Post = require("../models/Post");
const Comment = require("../models/Comment"); // Declarado porque en CommentController pedia declarar "Post"

const PostController = {

    //ENDPOINT: CREATE POST
    async create(req, res) {
        try {
            const post = await Post.create(req.body)
            res.status(201).send({ message: 'Post creado correctamente', post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el post' })
        }

    },

    //ENDPOINT: UPDATE POST
    async update(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(req.params._id, req.body,
                { new: true })
            res.send({ message: " This post has been successfully updated:", post });
        } catch (error) {
            console.error(error);
        }
    },

    //ENDPOINT: DELETE POST

    async delete(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params._id)
            res.send({ message: 'The following post has been deleted:', post })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the publication' })
        }
    },

    //ENDPOINT:  GET post by NAME (title)

    async getPostByTitle(req, res) {
        try {
            console.log(req.params.title)
            const posts = await Post.find({
                $text: {
                    $search: req.params.title,
                },
            });
            res.send(posts);
        } catch (error) {
            console.log(error);
        }
    },

    //ENDPOINT:  GET post by ID

    async getById(req, res) {
        try {
            const post = await Post.findById(req.params._id)
            res.send(post)
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = PostController;