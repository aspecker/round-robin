import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) =>(
          
    <Link to={props.url}>
        <button >{props.text} </button>
    </Link>

)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Button;