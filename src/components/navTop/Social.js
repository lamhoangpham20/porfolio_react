import React from 'react'
import './NavTop.scss'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-github } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
// import { FaInstagram } from '@fortawesome/free-solid-svg-icons'
export default function Social(props) {
    const rotate = (x)=>{
        x.target.style.transform = 'rotateY(360deg)'
    }
    const reverse = (x)=>{
        x.target.style.transform = 'rotateY(0deg)'
    }
    return (
        <div className='social'>
            <a href='https://github.com/lamhoangpham20/'  >
                <FaGithub color='white' alt className='icons' />
            </a>
            <a href='https://www.linkedin.com/in/lam-pham-241052183/' >
                <FaLinkedin color='white' className='icons'/>
            </a>
            <a href='https://www.instagram.com/lam_pham_00/' onMouseOver={(event)=>rotate(event)} onMouseOut={(event)=>reverse(event)}>
                <FaInstagram color='white' className="icons" />
            </a>
        </div>)
}