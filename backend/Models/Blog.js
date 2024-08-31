const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    blogger: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',  
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model('Blog', BlogSchema);
module.exports = BlogModel;
