const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogs = new Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    body: {
      type: "String",
      required: true,
    },
    tags: {
      type: "String",
      required: true,
    },
    shortbody: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = new mongoose.model("Blog", blogs);
module.exports = Blog;
