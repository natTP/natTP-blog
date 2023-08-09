import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialIcons } from 'utils/mapSocialIcons'

function Socials({
    className,
    iconSize = '1x',
    gap = 4,
    color = { default: 'text-neutral-500', hover: 'text-neutral-300' },
    username = false,
}) {
    const socialsQuery = useStaticQuery(graphql`
        query {
            strapiAbout {
                author {
                    socials {
                        id
                        username
                        type
                        link
                    }
                }
            }
        }
    `)

    const socials = socialsQuery.strapiAbout.author.socials

    if (username) {
        return (
            <ul className={`flex flex-col gap-${gap} ${className}`}>
                {socials.map((item) => (
                    <li key={item.id} className='group transition-all ease-in duration-300'>
                        <a href={item.link} target='_blank'>
                            <FontAwesomeIcon
                                icon={socialIcons[item.type]}
                                size={iconSize}
                                title={`link to ${item.type}`}
                                className={`${color.default} group-hover:${color.hover} focus:text-neutral-700`}
                            />
                            <span className='ml-2 font-loopless text-base text-neutral-500 group-hover:underline-gradient'>
                                {item.username}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <ul className={`flex flex-row gap-${gap} ${className}`}>
            {socials.map((item) => (
                <li key={item.id}>
                    <a href={item.link} target='_blank'>
                        <FontAwesomeIcon
                            icon={socialIcons[item.type]}
                            size={iconSize}
                            title={`link to ${item.type}`}
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
