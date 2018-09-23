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
        <p><i class="fas fa-envelope"> sports4u@sports.com</i></p>
        <p><i class="fas fa-mobile-alt"></i> 206-123-3455</p>
        <p><i class="fab fa-twitter-square"></i>twitter.com/sport4u</p>
        <p><i class="fab fa-facebook-square">facebook.com/sports4u</i></p>
        <p><i class="fab fa-instagram"></i>instagram.com/sports4u</p>
      </div>
    )
  }
}

const styles = {
  open: {
    transform: 'translateX(0)',
    boxShadow: '-5px 0 1em rgba(175, 162, 169, 0.8)'
  },
  close: {
    transform: 'translateX(18vw)',
    boxShadow: 'none'
  }
}

export default Contact;
