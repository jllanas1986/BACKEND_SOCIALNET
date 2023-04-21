// FALTA TESTEAR 
const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
user: String, // Sería user_id ?
post: String, // Sería post_id ?
content: String, //Para no usar "body" como en "Post"

}, { timestamps: true });
const Comment = mongoose.model('Comment', PostSchema);
module.exports = Comment;