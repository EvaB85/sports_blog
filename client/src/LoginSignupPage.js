import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class LoginSignPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <Signup user={this.props.user} liftToken={this.props.liftToken} />
          <Login user={this.props.user} liftToken={this.props.liftToken} />
        </div>
    )
  }
}

export default LoginSignPage;
