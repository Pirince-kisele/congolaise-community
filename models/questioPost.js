const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const questionPostSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  boby: {
    type: String,
    required: true,
  },
});
const Question = mongoose.model("Question", questionPostSchema);
module.exports = Question;
