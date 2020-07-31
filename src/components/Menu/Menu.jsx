import React from 'react'
import Logo from '../../logo.png'
import './Menu.css'
 //import ButtonLink from './components/ButtonLink/ButtonLink'
import Button from '../Menu/components/Button/Button'


export default props => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Guiflix" />
            </a>

            <Button as="a" className="ButtonLink" href="vareia">
                Novo video
            </Button>

        </nav>
    )
}