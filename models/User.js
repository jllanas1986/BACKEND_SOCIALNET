const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    // Relacionamos User con Comment
    commentId: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    // Relacionamos User con Post
    postId: [{
        type: ObjectId,
        ref: 'Post'
    }],
    tokens: [],
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;