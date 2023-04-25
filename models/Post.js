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
    commentIds: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    likes: [],

}, { timestamps: true });

PostSchema.index({ title: 'text' });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;