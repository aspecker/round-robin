import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import  Auth  from '../Auth/Auth';

const auth = new Auth();


class AuthBtn extends Component {
    goTo(route){
        this.props.history.replace(`/${route}`)
    }
    login() {
        this.props.auth.login();
    }
    logout() {
        this.props.auth.logout();
    }
    render () {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {
                    !isAuthenticated() && (
                        <Button outline color="success" onClick={this.login.bind(this)}> Login </Button>
                    )
                }
                {
                    isAuthenticated() && (
                        <Button outline color='danger' onClick={this.logout.bind(this)}> Logout </Button>
                    )
                }
            </div>
        )
    }
}

AuthBtn.propTypes = {
    auth: PropTypes.shape({
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.func
    }),
    history: PropTypes.shape({
        replace: PropTypes.func.isRequired
    })
}

export default AuthBtn;