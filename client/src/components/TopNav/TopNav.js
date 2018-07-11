import React, { Component } from 'react';
import {  Navbar, NavbarBrand} from 'reactstrap';
import Auth from '../Auth/Auth';
import AuthBtn from '../AuthBtn/AuthBtn'

class TopNav extends Component {
    render () {
        const auth = new Auth();
        return (
            <div>
                <Navbar color='dark' dark>
                    <NavbarBrand href ='/' className='mr-auto'> Round Robin </NavbarBrand>
                    <AuthBtn auth={auth}/>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;