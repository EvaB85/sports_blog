import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.user) {
      return (
        <header>
          <h1 className='app-name'>SportsFan Blog</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><a onClick={this.props.logout}>Logout</a></li>
              <li><a onClick={this.props.slideContact}>Contact</a></li>
            </ul>
          </nav>
        </header>
      )
    } else {
      return (
        <header>
          <h1 className='app-name'>SPORTS BLOG</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login-signup'>Login/Signup</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><a onClick={this.props.slideContact}>Contact</a></li>
            </ul>
          </nav>
        </header>
      )
    }
  }
}

export default Navbar;
