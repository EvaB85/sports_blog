import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class LoginSignPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='login-singup-outer'>
        <div className='login-signup-inner'>
          <Signup user={this.props.user} liftToken={this.props.liftToken} />
          <Login user={this.props.user} liftToken={this.props.liftToken} />
        </div>
      </div>
    )
  }
}

export default LoginSignPage;
