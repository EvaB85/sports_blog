import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main'>
        <Route exact path='/' component={Home} />
      </div>
    )
  }
}

export default Main;
