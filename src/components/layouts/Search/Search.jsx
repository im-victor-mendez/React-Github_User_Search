import './Search.scss'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { getGitHubUser } from "../../../utils/gitHubAPI";
import { useDispatch } from "react-redux";
import { setUser } from '../../../stateManagement/userSlice';
import { searchIcon } from '../../../media/icons/SearchIcon';

function Search() {
    const dispatch = useDispatch()
    const [input, setInput] = useState()

    function setUserStore() {
        getGitHubUser(input)
        .then(
            data => {
                dispatch(
                    setUser(data)
                )
            }
        )
    }

    return (
            <form
            id='search' className='board'
            onSubmit={
                (event) => {
                    event.preventDefault()

                    setUserStore()
                }
            }
            >
                <input
                type="text"
                placeholder='Search GitHub username...'
                onChange={event => setInput(event.target.value)} />

                <div id='input-inside'>
                    {searchIcon}
                    <Button type='submit'>Search</Button>
                </div>
            </form>
    )
}

export default Search