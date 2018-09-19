import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='contact'>
        <p>email@sports.com</p>
        <p>(c) 929-232-3456</p>
        <p>twitter icon</p>
        <p>facebook icon</p>
        <p>insta icon</p>
      </div>
    )
  }
}

export default Contact;
