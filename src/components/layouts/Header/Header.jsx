import './Header.scss'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ThemeIcons from '../../../media/icons/ThemeIcons'

function Header() {
    const [theme, setTheme] = useState(true)

    function toggleTheme() {
        setTheme(!theme)
        document.getElementById('App').classList.toggle('dark')
        document.getElementById('root').classList.toggle('dark')
    }

    const title = 'devfinder'

    /* Icons */

    return (
        <header id='header'>
            <h1>{title}</h1>
            
            <Button
            id='theme-toggle'
            onClick={toggleTheme}
            >
                <h1>
                    {theme ? 'LIGHT' : 'DARK'}
                </h1>
                <i>
                    {ThemeIcons(theme)}
                </i>
            </Button>
        </header>
    )
}

export default Header