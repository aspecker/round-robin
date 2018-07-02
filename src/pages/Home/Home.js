import React, { Component } from 'react';
import Button from '../../components/Button';
import './Home.css';

const defaultState = {

}

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = defaultState;
    }
    render () {
        return (
            <Button />
        )
    }
}

export default Home;