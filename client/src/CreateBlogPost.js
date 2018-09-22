import React, { Component } from 'react';
import axios from 'axios';

class CreateBlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/blog/create', {
      title: this.state.title,
      content: this.state.content,
      userId: this.props.user._id
    }).then( result => {
      console.log(result);
      console.log('title from back: ', result.data.title);
      console.log('content from back: ', result.data.content);
      this.props.updateBlogs();
    }).catch( err => console.log(err) )
  }

  render() {
    return(
      <form className='signin-form' onSubmit={this.handleSubmit}>
        Title: <input type='text' value={this.state.title} onChange={this.handleTitleChange} />
        <br />
        Content: <input type='text' value={this.state.content} onChange={this.handleContentChange} />
        <br />
        <input type='submit' value='Add Post' />
      </form>
    )
  }

}

export default CreateBlogPost;
