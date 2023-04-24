const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;


const CommentSchema = new mongoose.Schema({

commentTitle: String, // Sería post_id ?
commentBody: String, //Para no usar "body" como en "Post"
// Relacionamos USER--> Comments
userId: {
    type: ObjectId,
    ref: 'User'
    },
// Relacionamos POST--> Comments
postId: {
        type: ObjectId,
        ref: 'Post'
        },

}, { timestamps: true });
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;