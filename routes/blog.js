require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var Blog = require('../models/blog');

// GET - gets all blog posts
router.get('/all', (req, res) => {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.json({ blogs });
    }
  })
});

// POST - creates a new blog post
router.post('/create', (req, res) => {
  let { title, content, userId } = req.body;
  Blog.create({
    title,
    content,
    userId
  }, function(err, blogPost) {
    console.log('blog: ', blogPost);
    if (err) {
      res.send(err);
    } else {
      res.send(blogPost);
    }
  });
})

// DELETE - deletes a blog post
router.delete('/delete', (req, res) => {
  Blog.findByIdAndRemove(req.body.id, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.send({ msg: 'deleted' });
    }
  })
});

module.exports = router;
