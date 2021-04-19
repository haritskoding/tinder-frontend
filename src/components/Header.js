import React from 'react';
import "./header.css";
import { Forum, Person } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Logo from '../img/logo.png'


const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <Person fontSize="large"
                    className="header__icon" />
            </IconButton>
            <img className="header__logo"
                src={Logo}
                alt="header" />
            <IconButton>
                <Forum fontSize="large"
                    className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header
