import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Socials({ className, iconSize = '1x', gap = 4 }) {
    const socials = [
        {
            id: 1,
            socialName: 'facebook',
            href: 'https://www.facebook.com/natTP.page',
            username: 'natTP.page',
            icon: ['fab', 'facebook-f'],
        },
        {
            id: 2,
            socialName: 'twitter',
            href: 'https://twitter.com/natTPpage',
            username: '@natTPpage',
            icon: ['fab', 'twitter'],
        },
        {
            id: 3,
            socialName: 'instagram',
            href: 'https://www.instagram.com/art.at.natty.p',
            username: 'art.at.natty.p',
            icon: ['fab', 'instagram'],
        },
        {
            id: 4,
            socialName: 'github',
            href: 'https://github.com/natTP',
            username: 'natTP',
            icon: ['fab', 'github'],
        },
    ]

    return (
        <ul className={`flex flex-row gap-${gap} ${className}`}>
            {socials.map((item) => (
                <li key={item.id}>
                    <a href={item.href} target='_blank'>
                        <FontAwesomeIcon
                            icon={item.icon}
                            size={iconSize}
                            title={`link to ${item.socialName}`}
                            className='text-neutral-500 hover:text-neutral-300 focus:text-neutral-700 
                            transition-all ease-in duration-300'
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
