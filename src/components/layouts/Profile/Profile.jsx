import './Profile.scss'
import React from 'react'
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector(state => state.user)
    console.log(user)
    return (
        <article id='profile' className='board'>
            <section id='top'>
                <img src={user.avatar_url} alt="" />

                <div id='top-text'>
                    <h1 id='name'>{user.name ?? 'Not indicated'}</h1>
                    <h2 id='username'>@{user.login ?? 'Not indicated'}</h2>
                    <p id='joined'>Joined {user.created_at ? (user.created_at).substring(0, 10) : 'Not indicated'}</p>
                </div>
            </section>

            <article id='bio'>
                {user.bio ?? 'Not indicated'}
            </article>

            <section id='social'>
                <div className='social'>
                    <h1>Repos</h1>
                    <h2>{user.public_repos}</h2>
                </div>

                <div className='social'>
                    <h1>Followers</h1>
                    <h2>{user.followers}</h2>
                </div>

                <div className='social'>
                    <h1>Following</h1>
                    <h2>{user.following}</h2>
                </div>
            </section>

            <section id='contact'>
                <div id='location' className={`contact ${user.location ?? 'not-available'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <h1>{user.location ?? 'Not Available'}</h1>
                </div>

                <div id='link' className={`contact`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>
                    <h1>{user.html_url}</h1>
                </div>

                <div id='tweeter' className={`contact ${user.tweeter_username ?? 'not-available'}`}>
                    {/* To add Twitter icon */}
                    <h1>{user.tweeter_username ?? 'Not Available'}</h1>
                </div>

                <div id='company' className={`contact ${user.company ?? 'not-available'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg>
                    <h1>{user.company ?? 'Not Available'}</h1>
                </div>
            </section>
        </article>
    )
}

export default Profile