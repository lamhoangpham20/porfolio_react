
import React from 'react'
import img from '../../Logo.png'
import './NavTop.scss'

export default function Logo(props) {
    const rotate = (x)=>{
        x.target.style.transform = 'rotateY(180deg)'
    }
    const reverse = (x)=>{
        x.target.style.transform = 'rotateY(0deg)'
    }
    return (<>
        <div className="nav-logo">
            <a href='/' className='img' onMouseOver={(event)=>rotate(event)} onMouseOut={(event)=>reverse(event)} />
            <div className="nav-line"></div>
            <div className="nav-text">Lam Pham</div>
        </div>
        
    </>)
}