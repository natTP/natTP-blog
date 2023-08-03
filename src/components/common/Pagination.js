import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Pagination({ pageContext }) {
    const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber, pathPrefix } = pageContext

    if (numberOfPages < 2) return <span />

    return (
        <div className='font-loopless text-body text-neutral-700 flex gap-4'>
            {previousPagePath && (
                <Link
                    to={previousPagePath}
                    className='px-3 rounded-full hover:text-amethyst-500 hover:bg-neutral-100 focus:ring ring-neutral-200'
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
            )}
            {[...Array(numberOfPages).keys()].map((pageNumberIndex) => {
                const pageNumber = pageNumberIndex + 1
                const path = pageNumber === 1 ? pathPrefix : `${pathPrefix}/${pageNumber}`
                return (
                    <Link
                        to={path}
                        className={`px-3 rounded-full hover:bg-neutral-100 focus:ring ring-neutral-200 ${
                            pageNumber === humanPageNumber ? ' text-amethyst-500 bg-neutral-100' : 'text-neutral-700'
                        }`}
                    >
                        {pageNumber}
                    </Link>
                )
            })}
            {nextPagePath && (
                <Link
                    to={nextPagePath}
                    className='px-3 rounded-full hover:text-amethyst-500 hover:bg-neutral-100 focus:ring ring-neutral-200'
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            )}
        </div>
    )
}

export default Pagination
