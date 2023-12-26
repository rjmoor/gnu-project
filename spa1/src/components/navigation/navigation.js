import React from 'react';
import './Navigation.css';
import HeaderItems1 from './headerItems1';

const Navigation = ({onRouteChange}) => {
    return (
        <nav className="Navigation mv3">
            <div className="flex flex-row">
                {HeaderItems1.map((item) => {
                    return (
                        <div key={item.id} className={item.cName}>
                            <p onClick={() => onRouteChange(item.path)} className={item.pStyle}>{item.title}</p>
                        </div>
                    )
                })}
            </div>
    </nav>
    );
}

export default Navigation;