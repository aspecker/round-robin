import React, { Component } from 'react';
import {  Navbar, NavbarBrand, Button  } from 'reactstrap';

class TopNav extends Component {
    render () {
        return (
            <div>
                <Navbar color='dark' dark>
                    <NavbarBrand href ='/' className='mr-auto'> Round Robin </NavbarBrand>
                    <Button color='primary' className='btn-outline' > Login </Button>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;