import React from 'react';
import FooterItems from '../navigation/footerItems';


const Footer = ({onRouteChange}) => {
    return (
        <div className="Footer mv3">
            <div className="flex flex-row">
                {FooterItems.map((item) => {
                    return (
                        <div key={item.id} className={item.cName}>
                            <p onClick={() => onRouteChange(item.path)} className={item.pStyle}>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;