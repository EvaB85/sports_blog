import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.min.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
