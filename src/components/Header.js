import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/utils.scss';
import './App.scss';

function Header() {
    return (
        <div className={'Header'}>
            <Link to={'/join'}>
                <button className={'btn pull-right space-right'}>Sign Up</button>
            </Link>
            <Link to={'/login'}>
                <button className={'btn pull-right space-right'}>Sign In</button>
            </Link>
        </div>
    );
}

export default Header;