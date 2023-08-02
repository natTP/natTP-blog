import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function Socials({
    className,
    iconSize = '1x',
    gap = 4,
    color = { default: 'text-neutral-500', hover: 'text-neutral-300' },
}) {
    // TODO : Grab from backend
    const socials = [
        {
            id: 1,
            socialName: 'facebook',
            href: 'https://www.facebook.com/natTPpage',
            username: 'natTP.page',
            icon: faFacebookF,
        },
        {
            id: 2,
            socialName: 'twitter',
            href: 'https://twitter.com/natTPpage',
            username: '@natTPpage',
            icon: faTwitter,
        },
        {
            id: 3,
            socialName: 'instagram',
            href: 'https://www.instagram.com/art.at.nattp',
            username: 'art.at.natty.p',
            icon: faInstagram,
        },
        {
            id: 4,
            socialName: 'github',
            href: 'https://github.com/natTP',
            username: 'natTP',
            icon: faGithub,
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
                            className={`${color.default} hover:${color.hover} focus:text-neutral-700 
                            transition-all ease-in duration-300`}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
