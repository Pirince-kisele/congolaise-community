const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionPostSchema = new Schema({
   name: String,
   email:String,
  title: String,
  boby: String,
});
const questionPost = mongoose.model('BlogPost', questionPostSchema);
module.exports = BlogPost;