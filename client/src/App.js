import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './App.min.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactOpen: false,
      user: null
    }
  }

  slideContact = () => {
    this.setState({ contactOpen: !this.state.contactOpen });
  }

  liftTokenToState = data => {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout = () => {
   console.log('Logging out')
   localStorage.removeItem('sports_blog_token')
   this.setState({ token: '', user: null })
 }

 componentDidMount() {
   var token = localStorage.getItem('sports_blog_token')
   if (token === 'undefined' || token === 'null' || token === '' || token === undefined || token === null) {
     localStorage.removeItem('sports_blog_token')
     this.setState({
       token: '',
       user: null
     })
   } else {
     axios.post('/auth/me/from/token', {
       token // same as token: token
     }).then( result => {
       localStorage.setItem('sports_blog_token', result.data.token)
       this.setState({
         token: result.data.token,
         user: result.data.user
       })
     }).catch( err => console.log(err))
   }
 }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar user={this.state.user} logout={this.logout} slideContact={this.slideContact} />
          <Main
            user={this.state.user}
            liftToken={this.liftTokenToState}
            contactOpen={this.state.contactOpen}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
