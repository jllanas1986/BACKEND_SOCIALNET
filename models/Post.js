// FALTA TESTEAR 
const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Por favor pon un título al post."],
        },
    body:{
        type: String,
        required: [true, "Por favor escribe algo en el post."],
        },
    // Relacionamos USER--> Post
    userId: {
        type: ObjectId,
        // required: [true, "Por favor indica quien es el autor del post."], --> No se necesita porque lo pone el controlador
        ref: 'User'
    },
    // Relacionamos COMMENT--> Post
    commentIds: [{
        type: ObjectId,     
        ref: 'Comment'
    }],
    likes: [],

}, { timestamps: true });

PostSchema.index({ title: 'text' });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;