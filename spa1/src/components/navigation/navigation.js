import React from 'react';
import './Nav.css';

const Navigation = () => {
    return (
        <div className="Navigation flex mv3">
            <div className="outline link w-25 pa1 mr2">
            <p>Here</p>
            </div>
            <div class="outline w-25 pa1 mr2">
            <p>There</p>
            </div>
            <div class="outline w-25 pa1 mr2">
            <p>Elsewhere</p>
            </div>
            <div class="outline w-25 pa1 mr2">
            <p>Anywhere</p>
            </div>
            <div class="outline w-25 pa1 mr2">
            <p>Nowhere</p>
            </div>
         </div>
    );
}

export default Navigation;