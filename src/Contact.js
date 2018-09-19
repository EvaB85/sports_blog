import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let contactStyle = this.props.contactOpen ? styles.open : styles.close;
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
  open: {
    transform: 'translateX(0)',
    boxShadow: '-5px 0 1em rgba(255,105,180,.5)'
  },
  close: {
    transform: 'translateX(15vw)',
    boxShadow: 'none'
  }
}

export default Contact;
