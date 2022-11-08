import './Search.scss'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Search() {
    const [input, setInput] = useState()

    return (
        <label id='search' className='board'>
            <form
            onSubmit={
                (event) => {
                    event.preventDefault()
                    console.log(input)
                }
            }
            >
                {/* Fill = --bs-primary: #0d6efd; */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <input
                type="text"
                placeholder='Search GitHub username...'
                onChange={event => setInput(event.target.value)} />
                <Button type='submit'>Search</Button>
            </form>
        </label>
    )
}

export default Search