const Post = require("../models/Post");
const Comment = require("../models/Comment"); // Declarado porque en CommentController pedia declarar "Post"
const User = require('../models/User.js'); // Importamos model user

const PostController = {

    //ENDPOINT: CREATE POST
    async create(req, res) {
        try {
            const post = await Post.create(req.body)
            await User.findByIdAndUpdate(req.user._id, { $push: { postIds: post._id } })// Para PASAR AL OBJETO CREADO el id del user que hace el post
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
    },

    //ENDPOINT:  GET ALL posts + USERS who crated the posts + COMMENTS atached to posts

    async getAllPosts(req, res) {
        try {
            const posts = await Post.find().populate("userId").populate("commentIds") // Vacío para que recoja todo, no solo lo que le paso
            res.send(posts);
        } catch (error) {
            console.error(error);
        }
    },

    //ENDPOINT:  GET ALL posts PAGINATED

    async getAllPage(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const posts = await Post.find()
                .limit(limit)
                .skip((page - 1) * limit);
            res.send(posts);
        } catch (error) {
            console.error(error);
        }
    },

    // async getAllPosts(req, res) {
    //     try {
    //         const posts = await Post.find()
    //         res.send(posts);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    // ENDPOINT: Add a LIKE

    async like(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                { $push: { likes: req.user._id } },
                { new: true }
            );
            // res.send('Thanks for LIKING this post:' + post);
            res.send(post);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with your like" });
        }
    },

    //ENDPOINT: DISLIKE

    async dislike(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                {$pull: {likes: req.user._id}  }
                );
            res.send({ message: "Post has been UNLIKED" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem with your UNLIKE" });
        }
    },
}
module.exports = PostController;