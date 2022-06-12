import React from "react";
import './NavTop.scss'
const NavButton = () => {
    return (
        <div className='nav-button'>
            <div className='nav-button-2'></div>
            <div className='topline' style={{ backgroundColor: 'rgb(255,255,255)' }}></div>
            <div className='middleline' style={{ backgroundColor: 'rgb(255,255,255)' }}></div>
            <div className='bottomline' style={{ backgroundColor: 'rgb(255,255,255)' }}></div>
        </div>
    )
}

export default NavButton