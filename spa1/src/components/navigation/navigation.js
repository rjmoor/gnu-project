import React from 'react';
import './Nav.css';

const Navigation = () => {
    return (
        <div class="Navigation flex mv3">
            <div class="outline w-25 pa3 mr2">
            <code>Here</code>
            </div>
            <div class="outline w-25 pa3 mr2">
            <code>There</code>
            </div>
            <div class="outline w-25 pa3 mr2">
            <code>Elsewhere</code>
            </div>
            <div class="outline w-25 pa3 mr2">
            <code>Anywhere</code>
            </div>
            <div class="outline w-25 pa3">
            <code>Nowhere</code>
            </div>
         </div>
    );
}

export default Navigation;