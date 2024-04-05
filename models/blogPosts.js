const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogPostSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    boby: {
      type: String,
      required: true,
    },
    image: ImageBitmapRenderingContext,
    video: VideoPlaybackQuality,
  },
  { timestamps: true },
);
const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;
