// FALTA TESTEAR 
const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
title: String,
body: Number,
username: String,
like: Boolean

}, { timestamps: true });
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;