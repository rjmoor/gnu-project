import React from 'react';
import './Navigation.css';
import HeaderItems from './headerItems';

const Navigation = ({onRouteChange}) => {
    return (
        <nav className="Navigation mv3">
            <div className="flex flex-row">
                {HeaderItems.map((item) => {
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