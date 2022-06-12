import React from 'react'
import './NavTop.scss'
import Logo from './Logo'
import Social from './Social'
import NavButton from './NavButton'


export default function NavTop(props) {
    return (
        <>
            <div className="navbar navbar-animated">
                <div className='nav-bar-2'>
                    <div>
                        <Logo />
                    </div>
                    <div>
                        <Social></Social>
                    </div>
                </div>
                <div>
                    <NavButton />
                </div>
            </div>
        </>
    )
}