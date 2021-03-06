import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log(result.data) // result is result from back end responding to post request and .data is where axios stores the returned data
      localStorage.setItem('sports_blog_token', result.data.token) // change 'sports_blog_token' to your app name or something useful
      this.props.liftToken(result.data)
    }).catch( err => console.log(err) )
  }

  render() {
    if (this.props.user) {
      return <Redirect to='/blog' />
    } else {
      return(
        <form className='login-form' onSubmit={this.handleSubmit}>
          Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <br />
          Password: <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
          <br />
          <input type='submit' value='Log In!' />
        </form>
      )
    }
  }

}

export default Login;
