// FALTA TESTEAR 
const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    username: String,
    // Relacionamos USER--> Post
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    // Relacionamos COMMENT--> Post
    commentId: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    likes: [],

}, { timestamps: true });
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;