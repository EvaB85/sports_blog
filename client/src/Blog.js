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
          <button>Delete</button>
          <hr />
        </div>
      )
    }) : '';
    return (
        <div>
          {showCreate}
          {blogs}
          <div className='wrap-container'>
            <div className="wrap">
              <button>
                <i className="fas fa-angle-left"></i>
              </button>
                <div className="scroller">
                  <ul className="items">
                    <li className="item">Blog ONE</li>
                    <li className="item">Blog TWO</li>
                    <li className="item" >Blog THREE</li>
                  </ul>
                </div>
                <button>
                  <i className="fas fa-angle-right"></i>
                </button>
              </div>
          </div>
          <div className='container'>
            <div className='container__box-one'>
              <p>This is the first box of info</p>
            </div>

            <div className='container__box-two'>
              <p>This is the SECOND box of info</p>
            </div>

            <div className='container__box-three'>
              <p>This is the third box of info</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Blog;
