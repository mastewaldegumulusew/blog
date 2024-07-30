const mongoose = require("mongoose");
const Blog = require("../models/blogModel");

const blogs_view_all = (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.render("index", { blogs });
    })
    .catch((err) => console.log(err));
};

const blog_add_form = (req, res) => {
  res.render("addpost");
};

const blog_create_post = (req, res) => {
  const { blogTitle: title, blogTags: tags, blogBody: body } = req.body;
  const blog = new Blog({
    title,
    body,
    shortbody: body.length > 15 ? body.substr(0, 15) + "..." : body,
    tags,
  });

  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const blog_view_by_id = (req, res) => {
  const _id = req.params.id;
  Blog.find({ _id })
    .then((blog) => {
      res.render("viewpost", { blog: blog[0] });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blogs_view_all,
  blog_add_form,
  blog_create_post,
  blog_view_by_id,
};
