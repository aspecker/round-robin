import React, { Component } from 'react';



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
      </div>
    )
  }
}

export default Hub;