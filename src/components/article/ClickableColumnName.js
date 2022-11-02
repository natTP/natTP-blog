import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ClickableColumnName({ column, large }) {
    return (
        <Link
            to={`/column/${column.slug}`}
            className={`group font-decorative ${large ? 'text-2xl ' : 'text-xl '} leading-4 uppercase 
            text-gradient transition-all ease-in duration-300`}
        >
            <span className='underline-gradient group-focus:text-amethyst-500'>{column.title}</span>
            <FontAwesomeIcon
                icon={faArrowRight}
                size='xs'
                className='invisible group-hover:visible ml-1 
                text-amethyst-300 group-focus:text-amethyst-500 
                group-hover:translate-x-0.5 transition-transform ease-out duration-300'
            />
        </Link>
    )
}

export default ClickableColumnName
