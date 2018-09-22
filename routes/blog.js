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

router.post('/login', (req, res, next) => {
  let hashedPass = ''
  let passwordMatch = false

  // Look up the User
  User.findOne({email: req.body.email}, function(err, user) {
    hashedPass = user.password
    // Compare hashedPass to submitted password
    passwordMatch = bcrypt.compareSync(req.body.password, hashedPass)
    if (passwordMatch) {
      // The passwords match...
      var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
      })
      res.json({user, token})
    } else {
      console.log("Passwords don't match")
      res.status(401).json({
        error: true,
        message: 'Email or password is incorrect'
      })
    }
  })
})

router.post('/signup', (req, res, next) => {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (user) {
      res.redirect('/auth/signup')
    } else {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, user) {
        if (err) {
          console.log("GOT AN ERROR CREATING THE USER")
          console.log(err)
          res.send(err)
        } else {
          console.log("JUST ABOUT TO SIGN THE TOKEN")
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          })
          console.log("user: ", user)
          console.log("token: ", token)
          res.json({user, token})
        }
      })
    }
  })
})

module.exports = router;
