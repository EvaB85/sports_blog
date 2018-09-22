import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import LoginSignupPage from './LoginSignupPage';


class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main'>
        <Contact contactOpen={this.props.contactOpen} />
        <Route exact path='/' component={Home} />
        <Route path='/login-signup' render={() =>
          <LoginSignupPage liftToken={this.props.liftToken} />
        } />
        <Route path='/blog' render={() =>
          <Blog user={this.props.user} />
        }/>
      </div>
    )
  }
}

export default Main;
