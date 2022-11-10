import './Profile.scss'
import React from 'react'
import { useSelector } from "react-redux";
import { companyIcon, linkIcon, locationIcon } from '../../../media/icons/ContactIcons';

function Profile() {
    const user = useSelector(state => state.user)

    if (user.message)
        return (
            <article id='profile' className='board'>
                <h1 className='error'>Not found D:</h1>
            </article>
        )

    const createdAtDate = user.created_at ? (user.created_at).split('-') : {}
    
    /**
     * [0] = Day, [1] = Month, [2] = Year
     */
    let joinedDate

    if (user.created_at)
        joinedDate = [
            'Joined',
            createdAtDate[2].substring(0, 2),
            Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(createdAtDate[1])),
            createdAtDate[0]
        ].join(' ')
    else
        joinedDate = ''

    const social = [
        {
            title: 'Repos',
            value: user.public_repos
        },
        {
            title: 'Followers',
            value: user.followers
        },
        {
            title: 'Following',
            value: user.following
        }
    ]

    const contact = [
        {
            id: 'location',
            icon: locationIcon,
            value: user.location
        },
        {
            id: 'link',
            icon: linkIcon,
            value: user.html_url
        },
        {
            id: 'twitter',
            /* To add Twitter icon */
            icon: undefined,
            value: user.tweeter_username
        },
        {
            id: 'company',
            icon: companyIcon,
            value: user.company
        }
    ]
    
    return (
        <article id='profile' className='board'>
            <section id='top'>
                <img src={user.avatar_url} alt="" />

                <div id='top-text'>
                    <h1 id='name'>{user.name ?? 'Not indicated'}</h1>
                    <a id='username' href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login ? `@${user.login}` : ''}</a>
                    <p id='joined'>{joinedDate}</p>
                </div>
            </section>

            {
                !user.bio ? null :
                <article id='bio'>
                    {user.bio ?? 'This profile has no bio'}
                </article>
            }

            {
                !user.public_repos &&
                !user.followers &&
                !user.following ? null :
                <section id='social'>
                    {
                        social.map(
                            (div, key) => <div key={`social-key-${key}`} className='social'>
                                <h1>{div.title}</h1>
                                <h2>{div.value}</h2>
                            </div>
                        )
                    }
                </section>
            }

            {
                !user.location &&
                !user.html_url &&
                !user.tweeter_username &&
                !user.company ? null :
                <section id='contact'>
                {
                    contact.map(
                        (div, key) => <div id={div.id} key={`contact-key-${key}`} className={`contact ${!div.value ? 'not-available' : ''}`}>
                            {div.icon}
                            <h1>{div.value ?? 'Not Available'}</h1>
                        </div>
                    )
                }
                </section>
            }
        </article>
    )
}

export default Profile