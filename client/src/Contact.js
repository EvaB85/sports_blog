import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let contactStyle = this.props.contactOpen ? styles.open : styles.close;
    return (
      <div style={contactStyle} className='contact'>
        <h1>Contact Us</h1>
        <p><i class="fas fa-envelope"></i> sports4u@sports.com</p>
        <p><i class="fas fa-mobile-alt"></i> 206-123-3455</p>
        <p><i class="fab fa-twitter-square"></i> twitter.com/sport4u</p>
        <p><i class="fab fa-facebook-square"></i> facebook.com/sports4u</p>
        <p><i class="fab fa-instagram"></i> instagram.com/sports4u</p>
      </div>
    )
  }
}

const styles = {
  open: {
    transform: 'translateX(0)',
    boxShadow: '-4px 2px 1em rgba(40, 40, 40, 0.3)'
  },
  close: {
    transform: 'translateX(20vw)',
    boxShadow: 'none'
  }
}

export default Contact;
