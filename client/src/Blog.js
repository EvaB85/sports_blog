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
    if (this.props.user) {
      showCreate = <CreateBlogPost
                      updateBlogs={this.updateBlogs}
                      user={this.props.user}
                   /> ;
    }
    let blogs = this.state.blogs ? this.state.blogs.slice(0).reverse().map( (blog, key) => {
      return (
        <div key={key}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <button onClick={() => this.deleteBlog(blog._id)}>Delete</button>
          <hr />
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
