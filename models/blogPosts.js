const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
  name: String,
  email: String,
  title: String,
  boby: String,
  image: ImageBitmapRenderingContext,
  video: VideoPlaybackQuality
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;