import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
            <Link to ='/Hub'>
                <Button>Hub</Button>
            </Link>
        )
    }
}

export default Home;