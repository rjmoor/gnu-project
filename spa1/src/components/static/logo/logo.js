import React from 'react';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className="Logo-container center ma3">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Logo;