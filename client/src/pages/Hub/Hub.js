import React, { Component } from 'react';

import { Button } from 'reactstrap';
// import Auth from '../../components/Auth/Auth';

import './Hub.css';

const defaultState = {
    questions: []
}

class Hub extends Component {
  constructor (props) {
    super(props)
    this.state = defaultState;
  }

  render () {
    return (
      <div>
        <h1> This is the hub</h1>
        <Button text='Login'/>
      </div>
    )
  }
}

export default Hub;