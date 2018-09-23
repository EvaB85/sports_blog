import React, { Component } from 'react';
import axios from 'axios';
import CreateBlogPost from './CreateBlogPost';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: null
    }
  }

  updateBlogs = () => {
    axios.get('/blog/all').then(result => {
      console.log('result.data.blogs: ', result.data.blogs);
      this.setState({ blogs: result.data.blogs });
    })
  }

  deleteBlog = (id) => {
    axios.delete('/blog/delete', { data: {id} }).then( result => {
      this.updateBlogs();
    });
  }

  componentDidMount() {
    this.updateBlogs();
  }

  render() {
    let showCreate = '';
    let btn = () => '';
    if (this.props.user) {
      showCreate = <CreateBlogPost
                      updateBlogs={this.updateBlogs}
                      user={this.props.user}
                   /> ;
      btn = (post) => <button onClick={() => this.deleteBlog(post._id)}>Delete</button>
    }
    let blogs = this.state.blogs ? this.state.blogs.slice(0).reverse().map( (blog, key) => {
      return (
        <div className='blog-container' key={key}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          {btn(blog)}
        </div>
      )
    }) : '';
    return (
        <div>
          {showCreate}
          {blogs}
        </div>
    )
  }
}

export default Blog;
