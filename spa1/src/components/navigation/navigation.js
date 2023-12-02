import React from 'react';
import './Nav.css';

const Navigation = () => {
    return (
        <nav className="Navigation flex mv3">
            <div className="link pointer outline dim w-25 pa1 mh2">
            <p className='center w-25'>Here</p>
            </div>
            <div className="link pointer outline dim w-25 pa1 mr2">
            <p className='center w-25'>There</p>
            </div>
            <div className="link pointer outline dim w-25 pa1 mr2">
            <p className='center w-25'>Elsewhere</p>
            </div>
            <div className="link pointer outline dim w-25 pa1 mr2">
            <p className='center w-25'>Anywhere</p>
            </div>
            <div className="link pointer outline dim w-25 pa1 mr2">
            <p className='center w-25'>Nowhere</p>
            </div>
         </nav>
    );
}

export default Navigation;