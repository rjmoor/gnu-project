import React from 'react';
import "../navigation/Navigation.css"
import FooterItems from '../navigation/footerItems';

const Footer = ({onRouteChange}) => {
    return (
        <nav className="FooterNav">
            <div className="flex flex-row">
                {FooterItems.map((item) => {
                    return (
                        <div key={item.id} className={item.cName}>
                            <p onClick={() => onRouteChange(item.path)} className={item.pStyle}>{item.title}</p>
                        </div>
                    )
                })}
            </div>
    </nav>
    )
}

export default Footer;