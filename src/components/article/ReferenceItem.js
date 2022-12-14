import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faLink } from '@fortawesome/free-solid-svg-icons'
import { dateStringToYear, dateTimeStringToLocaleDateString } from 'utils/dateUtils'

function ReferenceItem({ reference }) {
    if (reference.type === 'book') {
        return (
            <li className='flex items-start font-looped text-body tracking-wide text-neutral-900 mb-2'>
                <FontAwesomeIcon icon={faBook} className='text-neutral-300 mr-2 mt-1.5' />
                <span>
                    <a
                        href={reference.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-amethyst-500 underline-link'
                    >
                        {reference.title}
                    </a>{' '}
                    {`(${dateStringToYear(reference.dateCreated)})`} เขียนโดย {reference.author}
                </span>
            </li>
        )
    }

    if (reference.type === 'link') {
        return (
            <li className='flex items-start font-looped text-body tracking-wide text-neutral-900 mb-2'>
                <FontAwesomeIcon icon={faLink} className='text-neutral-300 mr-2 mt-1.5' />
                <span>
                    <a
                        href={reference.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-amethyst-500 underline-link'
                    >
                        {reference.title}
                    </a>{' '}
                    {`(${dateStringToYear(reference.dateCreated)})`} โดย {reference.author} เข้าถึงเมื่อ{' '}
                    {dateTimeStringToLocaleDateString(reference.dateAccessed, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        calendar: 'gregory',
                    })}
                </span>
            </li>
        )
    }
}

export default ReferenceItem
