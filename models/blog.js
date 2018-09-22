var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
    required: false
  }
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
