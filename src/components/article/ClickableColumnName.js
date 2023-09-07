import React from 'react'
import { Link } from 'gatsby'
import Arrow from 'assets/arrow.svg'

function ClickableColumnName({ column, large }) {
    return (
        <Link
            to={`/column/${column.slug}`}
            className={`group font-decorative ${large ? 'text-2xl ' : 'text-xl '} leading-4 uppercase 
            text-gradient transition-all ease-in duration-300`}
        >
            <span className='underline-gradient group-focus:text-amethyst-500'>{column.title}</span>
            <Arrow
                className='inline w-4 invisible group-hover:visible ml-1 
                fill-amethyst-300 group-focus:fill-amethyst-500 
                group-hover:translate-x-0.5 transition-transform ease-out duration-300'
            />
        </Link>
    )
}

export default ClickableColumnName
