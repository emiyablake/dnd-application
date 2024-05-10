import React from 'react';
import Artboard1 from '../Assets/SVG/Artboard 1.svg'
import './Header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <h1 className='HeadH1'>Dragon's Forge</h1>
                <img src={Artboard1} className='logoReact'/>
            </nav>
        </header>
    )
}

export default Header;