import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let contactStyle = this.props.contactOpen ? styles.in : styles.out;
    return (
      <div style={contactStyle} className='contact'>
        <p>email@sports.com</p>
        <p>(c) 929-232-3456</p>
        <p>twitter icon</p>
        <p>facebook icon</p>
        <p>insta icon</p>
      </div>
    )
  }
}

const styles = {
  in: {
    transform: 'translateX(0)'
  },
  out: {
    transform: 'translateX(15vw)'
  }
}

export default Contact;
