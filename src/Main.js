import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';


class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main'>
        <Contact contactOpen={this.props.contactOpen} />
        <Route exact path='/' component={Home} />
      </div>
    )
  }
}

export default Main;
