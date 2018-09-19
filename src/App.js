import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.min.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactOpen: false
    }
  }

  slideContact = () => {
    this.setState({ contactOpen: !this.state.contactOpen });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar slideContact={this.slideContact} />
          <Main contactOpen={this.state.contactOpen} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
