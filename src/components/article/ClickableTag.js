import { Link } from 'gatsby'
import React from 'react'
import { stringToSlug } from 'utils/slugUtils'

function ClickableTag({ tag }) {
    return (
        <Link
            to={`/tag/${stringToSlug(tag.title)}`}
            className='px-2.5 font-decorative text-base leading-4 text-amethyst-300 bg-amethyst-0 uppercase
						hover:text-amethyst-700 hover:bg-amethyst-200 focus:ring focus:ring-amethyst-200/30 transition ease-out duration-300'
        >
            #{tag.title}
        </Link>
    )
}

export default ClickableTag
