import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <h1 className='app-name'>SPORTME</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><a onClick={this.props.slideContact}>Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;
